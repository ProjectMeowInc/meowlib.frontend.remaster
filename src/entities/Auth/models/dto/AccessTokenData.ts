import { UserRoleEnum } from "@/entities/User/models/UserEntity"

export interface IAccessTokenData {
    id: string
    login: string
    userRole: UserRoleEnum
    exp: number
}
