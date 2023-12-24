import {UserRoleEnum} from "@/entities/User/User";

export interface ICommentDto {
    id: number
    text: string
    postedAt: Date
    author: {
        id: number
        login: string
        role: UserRoleEnum
    }
}