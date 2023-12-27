import { ICreateTagRequest } from "@/entities/Tag/models/requests/ICreateTagRequest"
import { Result } from "@/shared/services/Result/Result"
import { HTTPResult } from "@/shared/services/HTTPResult/HTTPResult"
import { IGetAllTagResponse } from "@/entities/Tag/models/responses/IGetAllTagResponse"
import { EmptyResult } from "@/shared/services/Result/EmptyResult"
import { IUpdateTagRequest } from "@/entities/Tag/models/requests/IUpdateTagRequest"
import { ICreateTagResponse } from "@/entities/Tag/models/responses/ICreateTagResponse"
import { IUpdateTagByIdResponse } from "@/entities/Tag/models/responses/IUpdateTagByIdResponse"
import { IGetTagByIdResponse } from "@/entities/Tag/models/responses/IGetTagByIdResponse"

export class TagApi {

    static async createAsync(requestData: ICreateTagRequest): Promise<Result<ICreateTagResponse>> {
        const result = await new HTTPResult<ICreateTagResponse>()
            .withUrl("/v1/tags")
            .withPostMethod()
            .withAuth()
            .withBody(requestData)
            .sendAsync()

        if (result.hasError()) {
            return Result.withError(result.getError())
        }

        return Result.withOk(result.unwrap())
    }

    static async getAllAsync(): Promise<Result<IGetAllTagResponse>> {
        const result = await new HTTPResult<IGetAllTagResponse>()
            .withUrl("/v1/tags")
            .withGetMethod()
            .sendAsync()

        if (result.hasError()) {
            return Result.withError(result.getError())
        }

        return Result.withOk(result.unwrap())
    }

    static async deleteByIdAsync(tagId: number): Promise<EmptyResult> {
        const result = await new HTTPResult<void>()
            .withUrl(`/v1/tags/${tagId}`)
            .withDeleteMethod()
            .withAuth()
            .sendAsync()

        if (result.hasError()) {
            return EmptyResult.withError(result.getError())
        }

        return EmptyResult.withOk()
    }

    static async updateByIdAsync(tagId: number, requestData: IUpdateTagRequest): Promise<Result<IUpdateTagByIdResponse>> {
        const result = await new HTTPResult<IUpdateTagByIdResponse>()
            .withUrl(`/v1/tags/${tagId}`)
            .withPutMethod()
            .withBody(requestData)
            .withAuth()
            .sendAsync()

        if (result.hasError()) {
            return Result.withError(result.getError())
        }

        return Result.withOk(result.unwrap())
    }

    static async getByIdAsync(tagId: number): Promise<Result<IGetTagByIdResponse>> {
        const result = await new HTTPResult<IGetTagByIdResponse>()
            .withUrl(`/v1/tags/${tagId}`)
            .withGetMethod()
            .sendAsync()

        if (result.hasError()) {
            return Result.withError(result.getError())
        }

        return Result.withOk(result.unwrap())
    }
}