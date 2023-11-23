import { ISignInRequest } from "@/entities/Auth/models/requests/SignInRequests"

export interface ISignInDto {
    login: string
    password: string
}

export function mapRequestSignInToDto(request: ISignInRequest): ISignInDto {
    return {
        login: request.login,
        password: request.password,
    }
}
