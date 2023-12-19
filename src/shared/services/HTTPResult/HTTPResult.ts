import { Result } from "@/shared/services/Result/Result"
import { IncorrectUrlException } from "@/shared/exception/IncorrectUrlException"
import axios, { AxiosError, AxiosRequestConfig } from "axios"
import { TokenService } from "@/shared/services/TokenService"
import { IBaseErrorResponse } from "@/shared/models/IBaseErrorResponse"
import { IValidationErrorResponse } from "@/shared/models/IValidationErrorResponse"
import { LogService } from "@/shared/services/LogService"

type MethodsType = "GET" | "POST" | "PUT" | "DELETE"
const BASE_URL: string = "https://127.0.0.1:7007/api"

export class HTTPResult<TContent> {
    private method: MethodsType = "GET"
    private url: string | null = null
    private body: object | null = null
    private isAuth: boolean = false

    /**
     * IncorrectUrlException - ошибка формата ссылки
     * AxiosError - ошибка во время запроса от axios
     */
    async sendAsync(): Promise<Result<TContent>> {
        if (!this.url) {
            throw new IncorrectUrlException("Не правильный формат ссылки")
        }

        let config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: this.method,
            url: this.url,
        }

        if (this.body) {
            config.data = this.body
        }

        if (this.isAuth) {
            config.headers = {
                ...config.headers,
                Authorization: TokenService.getAccessToken(),
            }
        }

        try {
            const result = await axios.request<TContent>(config)

            return Result.withOk(result.data)
        } catch (err: any) {
            if (err.isAxiosError) {
                const error = err as AxiosError<IBaseErrorResponse | IValidationErrorResponse>

                if (error === null) {
                    LogService.error("Пустая ошибка", "HTTPRequest")
                    return Result.withError(this.unexpectedError())
                }

                if (!error.response) {
                    LogService.error(error.message, "HTTPRequest")
                    return Result.withError(this.unexpectedError())
                }

                // Идёт проверка на наличие поля validationErrors, для того чтобы понять какой формат ошибки
                if ("validationErrors" in error.response.data) {
                    return Result.withError({
                        errorMessage: "Ошибка валидации." + error.response.data.validationErrors[0].message,
                    })
                }

                return Result.withError({
                    errorMessage: error.response.data.errorMessage,
                })
            }

            return Result.withError(this.unexpectedError())
        }
    }

    private unexpectedError(): IBaseErrorResponse {
        return { errorMessage: "Неожиданная ошибка" }
    }

    //TODO: Сделать нормальную валидацию
    private static validateUrl(url: string): boolean {
        return url[0] === "/"
    }

    /**
     * Добавляет ссылку в запрос.
     * При неверном формате кидает исключение IncorrectUrlException
     * @param url - ссылка формата "/user/login"
     */
    withUrl(url: string): HTTPResult<TContent> {
        if (!HTTPResult.validateUrl(url)) {
            throw new IncorrectUrlException("Неправильный формат ссылки")
        }

        this.url = url
        return this
    }

    withBody(body: object): HTTPResult<TContent> {
        this.body = body
        return this
    }

    withGetMethod(): HTTPResult<TContent> {
        this.method = "GET"
        return this
    }

    withPostMethod(): HTTPResult<TContent> {
        this.method = "POST"
        return this
    }

    withPutMethod(): HTTPResult<TContent> {
        this.method = "PUT"
        return this
    }

    withDeleteMethod(): HTTPResult<TContent> {
        this.method = "DELETE"
        return this
    }

    withAuth(): HTTPResult<TContent> {
        this.isAuth = true
        return this
    }
}
