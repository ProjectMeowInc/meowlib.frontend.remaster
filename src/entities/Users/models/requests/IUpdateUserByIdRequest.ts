import {User} from "@/entities/User/User";

export interface IUpdateUserByIdRequest {
    login: string
    password: string
    role: User
}