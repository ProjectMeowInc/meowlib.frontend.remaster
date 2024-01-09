import { UserRoleEnum } from "@/entities/User/models/UserEntity"

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
