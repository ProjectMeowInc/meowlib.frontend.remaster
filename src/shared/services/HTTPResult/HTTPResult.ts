import {Result} from "@/shared/services/Result/Result";
import axios, {AxiosError, AxiosRequestConfig} from "axios";
import {TokenService} from "@/shared/services/TokenService";
import {IError} from "@/shared/models/IError";
import {IValidationError} from "@/shared/models/IValidationError";
import {IncorrectUrlException} from "@/shared/exception/IncorrectUrlException";
import {LogService} from "@/shared/services/LogService";

type MethodsType = "GET" | "POST" | "PUT" | "DELETE"
const BASE_URL: string = "https://localhost:7007/api"

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
            url: this.url
        }

        if (this.body) {
            config.data = this.body
        }

        if (this.isAuth) {
            config.headers = {
                ...config.headers,
                Authorization: TokenService.getAccessToken()
            }
        }

        try {
            const result = await axios.request<TContent>(config)

            return Result.withOk(result.data)
        }
        catch (err: any) {
            if (err.isAxiosError) {
                const error = err as AxiosError<IError | IValidationError>

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
                        errorMessage: "Ошибка валидации." + error.response.data.validationErrors[0].message
                    })
                }

                return Result.withError({
                    errorMessage: error.response.data.errorMessage,
                })
            }

            return Result.withError(this.unexpectedError())
        }
    }

    private unexpectedError(): IError {
        return {errorMessage: "Неожиданная ошибка"}
    }

    private validationUrl(url: string) {
        if (url[0] !== "/") {
            throw new IncorrectUrlException("Не верный формат ошибки")
        }
    }

    /**
     * Добавляет ссылку в запрос.
     * При неверном формате кидает исключение IncorrectUrlException
     * @param url - ссылка формата /user/login
     */
    withUrl(url: string) {
        this.validationUrl(url)
        return this
    }

    withBody(body: object) {
        this.body = body
        return this
    }

    withGetMethod() {
        this.method = "GET"
        return this
    }

    withPostMethod() {
        this.method = "POST"
        return this
    }

    withPutMethod() {
        this.method = "PUT"
        return this
    }

    withDeleteMethod() {
        this.method = "DELETE"
        return this
    }
}