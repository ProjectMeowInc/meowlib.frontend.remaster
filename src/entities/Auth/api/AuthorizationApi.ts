import { ISignInRequest } from "@/entities/Auth/models/requests/SignInRequests"
import { ILogInRequest } from "@/entities/Auth/models/requests/LogInRequest"
import { EmptyResult } from "@/shared/services/Result/EmptyResult"
import { HTTPRequest } from "@/shared/services/HTTPResult/HTTPRequest"
import { Result } from "@/shared/services/Result/Result"
import { ILoginResponse } from "@/entities/Auth/models/response/LogInResponse"
import { IUpdateAuthResponse } from "@/entities/Auth/models/response/UpdateAuthResponse"
import { IUpdateAuthRequest } from "@/entities/Auth/models/requests/UpdateAuthRequest"

export class AuthorizationApi {
    static async registration(requestData: ISignInRequest): Promise<EmptyResult> {
        const result = await new HTTPRequest<void>()
            .withUrl("/v1/authorization/sign-in")
            .withBody(requestData)
            .withPostMethod()
            .sendAsync()

        if (result.hasError()) {
            return EmptyResult.withError(result.getError())
        }

        return EmptyResult.withOk()
    }

    static async authorization(requestData: ILogInRequest): Promise<Result<ILoginResponse>> {
        const result = await new HTTPRequest<ILoginResponse>()
            .withUrl("/v1/authorization/log-in")
            .withBody(requestData)
            .withPostMethod()
            .sendAsync()

        if (result.hasError()) {
            return Result.withError(result.getError())
        }

        return Result.withOk(result.unwrap())
    }

    static async updateAuth(requestData: IUpdateAuthRequest): Promise<Result<IUpdateAuthResponse>> {
        const result = await new HTTPRequest<IUpdateAuthResponse>()
            .withUrl("/v1/authorization/update-auth")
            .withBody(requestData)
            .withPostMethod()
            .sendAsync()

        if (result.hasError()) {
            return Result.withError(result.getError())
        }

        return Result.withOk(result.unwrap())
    }
}
