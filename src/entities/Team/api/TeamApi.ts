import { ICreateTeamRequest } from "@/entities/Team/models/requests/ICreateTeamRequest"
import { EmptyResult } from "@/shared/services/Result/EmptyResult"
import { HTTPRequest } from "@/shared/services/HTTPResult/HTTPRequest"
import { Result } from "@/shared/services/Result/Result"
import { IGetTeamByIdResponse } from "@/entities/Team/models/responses/IGetTeamByIdResponse"
import { IUpdateTeamRoleRequest } from "@/entities/Team/models/requests/IUpdateTeamRoleRequest"
import { IGetAllTeamsResponse } from "@/entities/Team/models/responses/IGetAllTeamsResponse"

export class TeamApi {

    static async createTeamAsync(requestData: ICreateTeamRequest): Promise<EmptyResult> {
        const result = await new HTTPRequest<void>()
            .withUrl("/v1/team")
            .withPostMethod()
            .withBody(requestData)
            .withAuth()
            .sendAsync()

        if (result.hasError()) {
            return EmptyResult.withError(result.getError())
        }

        return EmptyResult.withOk()
    }

    static async getTeamByIdAsync(teamId: number): Promise<Result<IGetTeamByIdResponse>> {
        const result = await new HTTPRequest<IGetTeamByIdResponse>()
            .withUrl(`/v1/team/${teamId}`)
            .withGetMethod()
            .sendAsync()

        if (result.hasError()) {
            return Result.withError(result.getError())
        }

        return Result.withOk(result.unwrap())
    }

    static async updateTeamRoleAsync(teamId: number, userId: number, requestData: IUpdateTeamRoleRequest): Promise<EmptyResult> {
        const result = await new HTTPRequest<void>()
            .withUrl(`/v1/team/${teamId}/members/${userId}/role`)
            .withPostMethod()
            .withBody(requestData)
            .withAuth()
            .sendAsync()

        if (result.hasError()) {
            return EmptyResult.withError(result.getError())
        }

        return EmptyResult.withOk()
    }

    static async leaveTeamAsync(teamId: number): Promise<EmptyResult> {
        const result = await new HTTPRequest<void>()
            .withUrl(`/v1/team/${teamId}/leave`)
            .withPostMethod()
            .withAuth()
            .sendAsync()

        if (result.hasError()) {
            return EmptyResult.withError(result.getError())
        }

        return EmptyResult.withOk()
    }

    static async invitePeopleToTeamAsync(teamId: number, userId: number): Promise<EmptyResult> {
        const result = await new HTTPRequest<void>()
            .withUrl(`/v1/team/${teamId}/members/invite/${userId}`)
            .withPostMethod()
            .withAuth()
            .sendAsync()

        if (result.hasError()) {
            return EmptyResult.withError(result.getError())
        }

        return EmptyResult.withOk()
    }

    static async removePeopleFromTeamAsync(teamId: number, userId: number): Promise<EmptyResult> {
        const result = await new HTTPRequest<void>()
            .withUrl(`/v1/team/${teamId}/members/${userId}/remove`)
            .withPostMethod()
            .withAuth()
            .sendAsync()

        if (result.hasError()) {
            return EmptyResult.withError(result.getError())
        }

        return EmptyResult.withOk()
    }

    static async getAllTeamsAsync(pageNumber: number): Promise<Result<IGetAllTeamsResponse>> {
        const result = await new HTTPRequest<IGetAllTeamsResponse>()
            .withUrl(`/v1/team?page=${pageNumber}`)
            .withGetMethod()
            .sendAsync()

        if (result.hasError()) {
            return Result.withError(result.getError())
        }

        return Result.withOk(result.unwrap())
    }
}