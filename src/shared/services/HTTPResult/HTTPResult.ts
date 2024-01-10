import { Result } from "@/shared/services/Result/Result"
import { IncorrectUrlException } from "@/shared/exception/IncorrectUrlException"
import axios, { AxiosError, AxiosRequestConfig } from "axios"
import { TokenService } from "@/shared/services/TokenService"
import { IBaseErrorResponse } from "@/shared/models/IBaseErrorResponse"
import { IValidationErrorResponse } from "@/shared/models/IValidationErrorResponse"
import { LogService } from "@/shared/services/LogService"
import { NotImplementException } from "@/shared/exception/NotImplementException"
import { AuthService } from "@/entities/Auth/service/AuthService"

type MethodsType = "GET" | "POST" | "PUT" | "DELETE"
const BaseUrl: string = "http://localhost:5000/api"
const EmptyAuthToken: string = "EMPTYAUTH"

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
            baseURL: BaseUrl,
            method: this.method,
            url: this.url,
        }

        if (this.body) {
            config.data = this.body
        }

        if (this.isAuth) {
            config.headers = {
                ...config.headers,
                Authorization: TokenService.getAccessToken() ?? EmptyAuthToken,
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
        return url.startsWith("/")
    }

    /**
     * Добавляет ссылку в запрос.
     * При неверном формате кидает исключение IncorrectUrlException
     * @param url - ссылка формата "/user/login"
     */
    withUrl(url: string) {
        if (!HTTPResult.validateUrl(url)) {
            throw new IncorrectUrlException("Неправильный формат ссылки")
        }

        this.url = url
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

    withAuth(): HTTPResult<TContent> {
        this.isAuth = true
        return this
    }
}

axios.interceptors.request.use(
    async (config) => {
        if (!config.headers.Authorization) {
            return config
        }

        const token = config.headers.Authorization as string
        if (token != EmptyAuthToken) {
            const parseAccessTokenResult = TokenService.parseAccessToken(token)
            if (parseAccessTokenResult.hasError()) {
                return config
            }

            const accessTokenData = parseAccessTokenResult.unwrap()

            // current milliseconds to seconds
            const currentTimestamp = new Date().getTime() / 1000
            // if NOT expired
            if (accessTokenData.expiredTimestamp > currentTimestamp) {
                return config
            }
        }

        const currentRefreshToken = TokenService.getRefreshToken()
        // todo: add normal handling
        if (!currentRefreshToken) {
            return config
        }

        const updateAuthResult = await AuthService.updateAuth(currentRefreshToken)
        // todo: add normal handling
        if (updateAuthResult.hasError()) {
            return config
        }

        const { accessToken, refreshToken } = updateAuthResult.unwrap()
        TokenService.setAccessToken(accessToken)
        TokenService.setRefreshToken(refreshToken)

        config.headers.Authorization = accessToken
        return config
    },
    (error) => {
        return Promise.reject(error)
    },
)
