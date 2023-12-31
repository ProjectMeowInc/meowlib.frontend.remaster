import { UserRoleEnum } from "@/entities/User/User";

export interface IUpdateUserByIdResponse {
    id: number
    login: string
    role: UserRoleEnum
}