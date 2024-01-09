import { UserRoleEnum } from "@/entities/User/models/UserEntity"

export interface IGetUserByIdResponse {
    id: number
    login: string
    role: UserRoleEnum
}
