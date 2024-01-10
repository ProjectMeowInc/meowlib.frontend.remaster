import { Result } from "@/shared/services/Result/Result"
import { IGetAllUsersResponse } from "@/entities/User/models/response/IGetAllUsersResponse"
import { HTTPRequest } from "@/shared/services/HTTPResult/HTTPRequest"
import { IUpdateUserByIdRequest } from "@/entities/User/models/requests/IUpdateUserByIdRequest"
import { IUpdateUserByIdResponse } from "@/entities/User/models/response/IUpdateUserByIdResponse"
import { IGetUserByIdResponse } from "@/entities/User/models/response/IGetUserByIdResponse"

export class UsersApi {
    static async getAllUsers(): Promise<Result<IGetAllUsersResponse>> {
        const result = await new HTTPRequest<IGetAllUsersResponse>().withUrl("/v1/users").withGetMethod().sendAsync()

        if (result.hasError()) {
            return Result.withError(result.getError())
        }

        return Result.withOk(result.unwrap())
    }

    static async getUserById(usersId: number): Promise<Result<IGetUserByIdResponse>> {
        const result = await new HTTPRequest<IGetUserByIdResponse>()
            .withUrl(`/v1/users/${usersId}`)
            .withGetMethod()
            .sendAsync()

        if (result.hasError()) {
            return Result.withError(result.getError())
        }

        return Result.withOk(result.unwrap())
    }

    static async updateUserById(
        usersId: number,
        requestData: IUpdateUserByIdRequest,
    ): Promise<Result<IUpdateUserByIdResponse>> {
        const result = await new HTTPRequest<IUpdateUserByIdResponse>()
            .withUrl(`/v1/users/${usersId}`)
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
