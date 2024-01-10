import { UserRoleEnum } from "@/entities/User/models/UserEntity"

export interface IAccessTokenDto {
    id: number
    login: string
    userRole: UserRoleEnum
    expiredTimestamp: number
}
