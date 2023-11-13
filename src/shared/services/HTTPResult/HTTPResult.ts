import {Result} from "@/shared/services/Result/Result";
import axios, {AxiosError, AxiosRequestConfig} from "axios";
import {TokenService} from "@/shared/services/TokenService";
import {IError} from "@/shared/services/interfaces/IError";
import {IValidationError} from "@/shared/services/interfaces/IValidationError";

type MethodsType = "GET" | "POST" | "PUT" | "DELETE"
const BASE_URL: string = "https://localhost:7007/api"

export class HTTPResult<TContent> {
    private method: MethodsType = "GET"
    private url: string | null = null
    private body: object | null = null
    private isAuth: boolean = false

    async sendAsync(): Promise<Result<TContent>> {
        if (!this.url) {
            throw new Error("Ссылка не может быть пустой")
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
                    return Result.withError({errorMessage: "Неожиданная ошибка"})
                }

                if (!error.response) {
                    return Result.withError({errorMessage: "Неожиданная ошибка"})
                }

                if ("validationError" in error.response.data) {
                    return Result.withError({
                        errorMessage: error.response.data.errorMessage,
                        validationError: error.response.data.validationError
                    })
                }

                return Result.withError({
                    errorMessage: error.response.data.errorMessage,
                })
            }

            return Result.withError({errorMessage: "Неожиданная ошибка"})
        }
    }

    withUrl(url: string) {
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
}