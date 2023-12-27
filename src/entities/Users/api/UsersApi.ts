import {Result} from "@/shared/services/Result/Result";
import {IGetAllUsersResponse} from "@/entities/Users/models/response/IGetAllUsersResponse";
import {HTTPResult} from "@/shared/services/HTTPResult/HTTPResult";
import {EmptyResult} from "@/shared/services/Result/EmptyResult";
import {IUpdateUserByIdRequest} from "@/entities/Users/models/requests/IUpdateUserByIdRequest";

export class UsersApi {
    static async getAllUsers(): Promise<Result<IGetAllUsersResponse>> {
        const result = await new HTTPResult<IGetAllUsersResponse>()
            .withUrl('/v1/users')
            .withGetMethod()
            .sendAsync()

        if (result.hasError()) {
            return Result.withError(result.getError())
        }

        return Result.withOk(result.unwrap())
    }

    static async updateUserById(id: number, requestData: IUpdateUserByIdRequest): Promise<EmptyResult> {
        const result = await new HTTPResult<void>()
            .withUrl(`/v1/users/${id}`)
            .withAuth()
            .withBody(requestData)
            .withPutMethod()
            .sendAsync()

        if (result.hasError()) {
            return EmptyResult.withError(result.getError())
        }

        return EmptyResult.withOk()
    }

}