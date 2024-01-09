import { UserRoleEnum } from "@/entities/User/models/UserEntity"

export interface IUpdateUserByIdRequest {
    login: string
    password: string
    role: UserRoleEnum
}
