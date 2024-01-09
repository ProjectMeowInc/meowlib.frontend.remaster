import { UserRoleEnum } from "@/entities/User/models/UserEntity"

export interface IUpdateUserDTO {
    login: string
    password: string
    role: UserRoleEnum
}
