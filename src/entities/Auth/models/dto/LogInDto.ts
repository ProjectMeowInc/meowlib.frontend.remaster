import { ILoginResponse } from "@/entities/Auth/models/response/LogInResponse"
import { ILogInRequest } from "@/entities/Auth/models/requests/LogInRequest"

export interface ILogRequestInDto {
    login: string
    password: string
    isLongSession: boolean
}

export interface ILogInResponseInDto {
    accessToken: string
    refreshToken: string
}

export function mapRequestLogInToDTO(request: ILogInRequest): ILogRequestInDto {
    return {
        login: request.login,
        password: request.password,
        isLongSession: request.isLongSession,
    }
}

export function mapResponseLogInToDTO(response: ILoginResponse): ILogInResponseInDto {
    return {
        accessToken: response.accessToken,
        refreshToken: response.refreshToken,
    }
}
