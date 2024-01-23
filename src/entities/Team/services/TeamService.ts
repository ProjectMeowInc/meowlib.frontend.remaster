import { IShortTeamDto } from "@/entities/Team/models/dto/IShortTeamDto"
import { EmptyResult } from "@/shared/services/Result/EmptyResult"
import { TeamApi } from "@/entities/Team/api/TeamApi"
import { Result } from "@/shared/services/Result/Result"
import { TeamEntity } from "@/entities/Team/TeamEntity"
import { TeamRoleType } from "@/entities/Team/types/TeamRoleType"

export class TeamService {
    
    static async createTeamAsync(requestData: IShortTeamDto): Promise<EmptyResult> {
        return await TeamApi.createTeamAsync(requestData)
    }
    
    static async getTeamByIdAsync(teamId: number): Promise<Result<TeamEntity>> {
        return await TeamApi.getTeamByIdAsync(teamId)
    }

    static async updateTeamRoleAsync(teamId: number, userId: number, newRole: TeamRoleType): Promise<EmptyResult> {
        return await TeamApi.updateTeamRoleAsync(teamId, userId, {newRole})
    }

    static async leaveTeamAsync(teamId: number): Promise<EmptyResult> {
        return await TeamApi.leaveTeamAsync(teamId)
    }

    static async invitePeopleToTeamAsync(teamId: number, userId: number): Promise<EmptyResult> {
        return await TeamApi.invitePeopleToTeamAsync(teamId, userId)
    }

    static async removePeopleFromTeamAsync(teamId: number, userId: number): Promise<EmptyResult> {
        return await TeamApi.removePeopleFromTeamAsync(teamId, userId)
    }

    static async getAllTeamsAsync(pageNumber: number): Promise<Result<IShortTeamDto[]>> {
        const result = await TeamApi.getAllTeamsAsync(pageNumber)

        if (result.hasError()) {
            return Result.withError(result.getError())
        }

        const {items} = result.unwrap()

        return Result.withOk(items)
    }

    static async acceptTeamInviteAsync(payload: string): Promise<EmptyResult> {
        return await TeamApi.acceptTeamInviteAsync({
            data: payload
        })
    }
}