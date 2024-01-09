import { AuthorizationApi } from "@/entities/Auth/api/AuthorizationApi"
import { EmptyResult } from "@/shared/services/Result/EmptyResult"
import { Result } from "@/shared/services/Result/Result"
import { ILogInDto } from "@/entities/Auth/models/dto/LogInDto"
import { ILogInRequest } from "@/entities/Auth/models/requests/LogInRequest"
import { IUpdateAuthRequest } from "@/entities/Auth/models/requests/UpdateAuthRequest"
import { IUpdateAuthDto } from "@/entities/Auth/models/dto/UpdateAuthDto"
import { ISignInRequest } from "@/entities/Auth/models/requests/SignInRequests"

export class AuthService {
    static async registration(registrationData: ISignInRequest): Promise<EmptyResult> {
        return await AuthorizationApi.registration(registrationData)
    }

    static async authorization(authorizationData: ILogInRequest): Promise<Result<ILogInDto>> {
        return await AuthorizationApi.authorization(authorizationData)
    }

    static async updateAuth(updateAuthData: IUpdateAuthRequest): Promise<Result<IUpdateAuthDto>> {
        return await AuthorizationApi.updateAuth(updateAuthData)
    }
}
