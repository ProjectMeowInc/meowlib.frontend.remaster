import {UserRoleEnum} from "@/entities/User/User";

export interface IGetUserByIdResponse {
    id: number
    login: string
    role: UserRoleEnum
}