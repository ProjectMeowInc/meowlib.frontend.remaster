import { AuthorizationApi } from "@/entities/Auth/api/AuthorizationApi"
import { EmptyResult } from "@/shared/services/Result/EmptyResult"
import { Result } from "@/shared/services/Result/Result"
import { ILogInDto } from "@/entities/Auth/models/dto/LogInDto"
import { IUpdateAuthDto } from "@/entities/Auth/models/dto/UpdateAuthDto"

export class AuthService {
    static async registration(login: string, password: string): Promise<EmptyResult> {
        return await AuthorizationApi.registration({
            login,
            password,
        })
    }

    static async authorization(login: string, password: string, isLongSession: boolean): Promise<Result<ILogInDto>> {
        return await AuthorizationApi.authorization({
            login,
            password,
            isLongSession,
        })
    }

    static async updateAuth(refreshToken: string): Promise<Result<IUpdateAuthDto>> {
        return await AuthorizationApi.updateAuth({
            refreshToken,
        })
    }
}
