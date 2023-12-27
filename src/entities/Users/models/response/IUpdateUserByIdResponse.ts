import {User} from "@/entities/User/User";

export interface IUpdateUserByIdResponse {
    id: number
    login: string
    role: User
}