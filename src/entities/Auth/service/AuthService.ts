import {AuthorizationApi} from "@/entities/Auth/api/AuthorizationApi";
import {EmptyResult} from "@/shared/services/Result/EmptyResult";
import {ILoginResponse} from "@/entities/Auth/models/response/LogInResponse";
import {Result} from "@/shared/services/Result/Result";
import {IUpdateAuthResponse} from "@/entities/Auth/models/response/UpdateAuthResponse";

export class AuthService {

    static async registration(login: string, password: string): Promise<EmptyResult> {
        return await AuthorizationApi.registration({login, password})
    }

    static async authorization(login: string, password: string, isLongSession: boolean): Promise<Result<ILoginResponse>> {
        return await AuthorizationApi.authorization({login, password, isLongSession})
    }

    static async updateAuth(refreshToken: string): Promise<Result<IUpdateAuthResponse>> {
        return await AuthorizationApi.updateAuth({refreshToken})
    }
}