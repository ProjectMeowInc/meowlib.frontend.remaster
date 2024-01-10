import { Result } from "@/shared/services/Result/Result"
import { HTTPRequest } from "@/shared/services/HTTPResult/HTTPRequest"
import { IGetAllPeopleResponse } from "@/entities/People/models/responses/IGetAllPeopleResponse"
import { ICreatePeopleRequest } from "@/entities/People/models/requests/ICreatePeopleRequest"
import { ICreatePeopleResponse } from "@/entities/People/models/responses/ICreatePeopleResponse"
import { IUpdatePeopleRequest } from "@/entities/People/models/requests/IUpdatePeopleRequest"
import { IUpdatePeopleResponse } from "@/entities/People/models/responses/IUpdatePeopleResponse"
import { EmptyResult } from "@/shared/services/Result/EmptyResult"
import { IGetPeopleByIdResponse } from "@/entities/People/models/responses/IGetPeopleByIdResponse"

export class PeopleApi {
    static async getAllAsync(pageNumber?: number): Promise<Result<IGetAllPeopleResponse>> {
        const result = await new HTTPRequest<IGetAllPeopleResponse>()
            .withUrl(`/v1/people?page=${pageNumber ?? ""}`)
            .withGetMethod()
            .sendAsync()

        if (result.hasError()) {
            return Result.withError(result.getError())
        }

        return Result.withOk(result.unwrap())
    }

    static async createAsync(requestData: ICreatePeopleRequest): Promise<Result<ICreatePeopleResponse>> {
        const result = await new HTTPRequest<ICreatePeopleResponse>()
            .withUrl("/v1/people")
            .withPostMethod()
            .withAuth()
            .withBody(requestData)
            .sendAsync()

        if (result.hasError()) {
            return Result.withError(result.getError())
        }

        return Result.withOk(result.unwrap())
    }

    static async updateByIdAsync(
        peopleId: number,
        requestData: IUpdatePeopleRequest,
    ): Promise<Result<IUpdatePeopleResponse>> {
        const result = await new HTTPRequest<IUpdatePeopleResponse>()
            .withUrl(`/v1/people/${peopleId}`)
            .withPutMethod()
            .withBody(requestData)
            .withAuth()
            .sendAsync()

        if (result.hasError()) {
            return Result.withError(result.getError())
        }

        return Result.withOk(result.unwrap())
    }

    static async deleteByIdAsync(peopleId: number): Promise<EmptyResult> {
        const result = await new HTTPRequest<void>()
            .withUrl(`/v1/people/${peopleId}`)
            .withAuth()
            .withDeleteMethod()
            .sendAsync()

        if (result.hasError()) {
            return EmptyResult.withError(result.getError())
        }

        return EmptyResult.withOk()
    }

    static async getByIdAsync(peopleId: number): Promise<Result<IGetPeopleByIdResponse>> {
        const result = await new HTTPRequest<IGetPeopleByIdResponse>()
            .withUrl(`/v1/people/${peopleId}`)
            .withGetMethod()
            .sendAsync()

        if (result.hasError()) {
            return Result.withError(result.getError())
        }

        return Result.withOk(result.unwrap())
    }
}
