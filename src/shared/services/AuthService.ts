import { ILoginInRequest, ISignInRequest } from "@/shared/models/UserRequests"
import { EmptyResult } from "@/shared/services/Result/EmptyResult"
import { HTTPResult } from "@/shared/services/HTTPResult/HTTPResult"
import { Result } from "@/shared/services/Result/Result"
import { ILogin } from "@/entities/User/ILogin"

export class AuthService {
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

    static async authorization(requestData: ILoginInRequest): Promise<Result<ILogin>> {
        const result = await new HTTPResult<ILogin>()
            .withUrl("/authorization/log-in")
            .withBody(requestData)
            .withPostMethod()
            .sendAsync()

        if (result.hasError()) {
            return Result.withError(result.getError())
        }

        return Result.withOk(result.unwrap())
    }
}
