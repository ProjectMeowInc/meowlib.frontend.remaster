import {User} from "@/entities/User/User";

export interface IGetAllUsersResponse {
    items: {
        id: number
        login: string
        role: User
    } []
}