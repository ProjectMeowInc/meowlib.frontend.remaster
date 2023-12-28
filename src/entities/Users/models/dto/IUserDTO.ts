import { UserRoleEnum } from "@/entities/User/User";

export interface IUserDTO {
    id: number
    login: string
    role: UserRoleEnum
}