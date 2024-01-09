import { UserRoleEnum } from "@/entities/User/models/UserEntity"

export interface IUpdateUserByIdResponse {
    id: number
    login: string
    role: UserRoleEnum
}
