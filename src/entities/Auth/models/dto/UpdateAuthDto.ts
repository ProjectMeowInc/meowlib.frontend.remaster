import { IUpdateAuthResponse } from "@/entities/Auth/models/response/UpdateAuthResponse"
import { IUpdateAuthRequest } from "@/entities/Auth/models/requests/UpdateAuthRequest"

export interface IUpdateAuthRequestInDto {
    refreshToken: string
}

export interface IUpdateAuthResponseInDto {
    refreshToken: string
}

export function mapRequestUpdateAuthToDto(request: IUpdateAuthRequest): IUpdateAuthRequestInDto {
    return {
        refreshToken: request.refreshToken,
    }
}

export function mapResponseUpdateAuthToDto(response: IUpdateAuthResponse): IUpdateAuthResponseInDto {
    return {
        refreshToken: response.refreshToken,
    }
}
