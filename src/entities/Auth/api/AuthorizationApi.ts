import { ISignInRequest } from "@/entities/Auth/models/requests/SignInRequests"
import { ILogInRequest } from "@/entities/Auth/models/requests/LogInRequest"
import { EmptyResult } from "@/shared/services/Result/EmptyResult"
import { HTTPResult } from "@/shared/services/HTTPResult/HTTPResult"
import { Result } from "@/shared/services/Result/Result"
import { ILoginResponse } from "@/entities/Auth/models/response/LogInResponse"
import { IUpdateAuthResponse } from "@/entities/Auth/models/response/UpdateAuthResponse"
import { IUpdateAuthRequest } from "@/entities/Auth/models/requests/UpdateAuthRequest"

export class AuthorizationApi {
    static async registration(requestData: ISignInRequest): Promise<EmptyResult> {
        const result = await new HTTPResult<void>()
            .withUrl("/authorization/sign-in")
            .withBody(requestData)
            .withPostMethod()
            .sendAsync()

        if (result.hasError()) {
            return EmptyResult.withError(result.getError())
        }

        return EmptyResult.withOk()
    }

    static async authorization(requestData: ILogInRequest): Promise<Result<ILoginResponse>> {
        const result = await new HTTPResult<ILoginResponse>()
            .withUrl("/authorization/log-in")
            .withBody(requestData)
            .withPostMethod()
            .sendAsync()

        if (result.hasError()) {
            return Result.withError(result.getError())
        }

        return Result.withOk(result.unwrap())
    }

    static async updateAuth(requestData: IUpdateAuthRequest): Promise<Result<IUpdateAuthResponse>> {
        const result = await new HTTPResult<IUpdateAuthResponse>()
            .withUrl("/authorization/update-auth")
            .withBody(requestData)
            .withPostMethod()
            .sendAsync()

        if (result.hasError()) {
            return Result.withError(result.getError())
        }

        return Result.withOk(result.unwrap())
    }
}
