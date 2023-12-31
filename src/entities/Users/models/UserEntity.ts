import {UserRoleEnum} from "@/entities/User/User";

export interface UserEntity {
    id: number
    login: string
    role: UserRoleEnum
}