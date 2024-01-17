import { TeamRoleType } from "@/entities/Team/types/TeamRoleType"

export interface IGetTeamByIdResponse {
    id: number
    name: string
    description: string
    members: {
        id: number
        login: string
        role: TeamRoleType
    }[]
}