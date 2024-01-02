import { Result } from "@/shared/services/Result/Result"
import { IGetAllAuthorsResponse } from "@/entities/Author/models/responses/IGetAllAuthorsResponse"
import { HTTPResult } from "@/shared/services/HTTPResult/HTTPResult"
import { ICreateAuthorResponse } from "@/entities/Author/models/responses/ICreateAuthorResponse"
import { ICreateAuthorRequest } from "@/entities/Author/models/request/ICreateAuthorRequest"
import { IUpdateAuthorResponse } from "@/entities/Author/models/responses/IUpdateAuthorResponse"
import { IUpdateAuthorRequest } from "@/entities/Author/models/request/IUpdateAuthorRequest"
import { EmptyResult } from "@/shared/services/Result/EmptyResult"
import { IGetAuthorByIdResponse } from "@/entities/Author/models/responses/IGetAuthorByIdResponse"
import { IGetAuthorsByParamsResponse } from "@/entities/Author/models/responses/IGetAuthorsByParamsResponse"

export class AuthorApi {

    static async getAllAsync(): Promise<Result<IGetAllAuthorsResponse>> {
        const result = await new HTTPResult<IGetAllAuthorsResponse>()
            .withUrl("/v1/authors")
            .withGetMethod()
            .sendAsync()

        if (result.hasError()) {
            return Result.withError(result.getError())
        }

        return Result.withOk(result.unwrap())
    }

    static async createAsync(requestData: ICreateAuthorRequest): Promise<Result<ICreateAuthorResponse>> {
        const result = await new HTTPResult<ICreateAuthorResponse>()
            .withUrl("/v1/authors")
            .withPostMethod()
            .withAuth()
            .withBody(requestData)
            .sendAsync()

        if (result.hasError()) {
            return Result.withError(result.getError())
        }

        return Result.withOk(result.unwrap())
    }

    static async updateByIdAsync(authorId: number, requestData: IUpdateAuthorRequest): Promise<Result<IUpdateAuthorResponse>> {
        const result = await new HTTPResult<IUpdateAuthorResponse>()
            .withUrl(`/v1/authors/${authorId}`)
            .withPutMethod()
            .withBody(requestData)
            .withAuth()
            .sendAsync()

        if (result.hasError()) {
            return Result.withError(result.getError())
        }

        return Result.withOk(result.unwrap())
    }

    static async deleteByIdAsync(authorId: number): Promise<EmptyResult> {
        const result = await new HTTPResult<void>()
            .withUrl(`/v1/authors/${authorId}`)
            .withAuth()
            .withDeleteMethod()
            .sendAsync()

        if (result.hasError()) {
            return EmptyResult.withError(result.getError())
        }

        return EmptyResult.withOk()
    }

    static async getByIdAsync(authorId: number): Promise<Result<IGetAuthorByIdResponse>> {
        const result = await new HTTPResult<IGetAuthorByIdResponse>()
            .withUrl(`/v1/authors/${authorId}`)
            .withGetMethod()
            .sendAsync()

        if (result.hasError()) {
            return Result.withError(result.getError())
        }

        return Result.withOk(result.unwrap())
    }

    static async getBySearchParams(authorName: string): Promise<Result<IGetAuthorsByParamsResponse>> {
        const result = await new HTTPResult<IGetAuthorsByParamsResponse>()
            .withUrl(`/v1/authors/search?Name=${authorName}`)
            .withGetMethod()
            .sendAsync()

        if (result.hasError()) {
            return Result.withError(result.getError())
        }

        return Result.withOk(result.unwrap())
    }
}