import {UserRoleEnum} from "@/entities/User/User";

export interface IUpdateUserDTO {
    login: string
    password: string
    role: UserRoleEnum
}