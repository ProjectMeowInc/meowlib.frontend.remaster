import {Result} from "@/shared/services/Result/Result";
import {IGetAllUsersResponse} from "@/entities/Users/models/response/IGetAllUsersResponse";
import {HTTPResult} from "@/shared/services/HTTPResult/HTTPResult";
import {IUpdateUserByIdRequest} from "@/entities/Users/models/requests/IUpdateUserByIdRequest";
import {IUpdateUserByIdResponse} from "@/entities/Users/models/response/IUpdateUserByIdResponse";
import {IGetUserByIdResponse} from "@/entities/Users/models/response/IGetUserByIdResponse";

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

    static async getUserById(id: number): Promise<Result<IGetUserByIdResponse>> {
        const result = await new HTTPResult<IGetUserByIdResponse>()
            .withUrl(`/v1/users/${id}`)
            .withGetMethod()
            .sendAsync()

        if (result.hasError()) {
            return Result.withError(result.getError())
        }

        return Result.withOk(result.unwrap())
    }

    static async updateUserById(id: number, requestData: IUpdateUserByIdRequest): Promise<Result<IUpdateUserByIdResponse>> {
        const result = await new HTTPResult<IUpdateUserByIdResponse>()
            .withUrl(`/v1/users/${id}`)
            .withAuth()
            .withBody(requestData)
            .withPutMethod()
            .sendAsync()

        if (result.hasError()) {
            return Result.withError(result.getError())
        }

        return Result.withOk(result.unwrap())
    }


}