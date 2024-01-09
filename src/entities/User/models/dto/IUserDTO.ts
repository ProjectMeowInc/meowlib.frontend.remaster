import { UserRoleEnum } from "@/entities/User/models/UserEntity"

export interface IUserDTO {
    id: number
    login: string
    role: UserRoleEnum
}
