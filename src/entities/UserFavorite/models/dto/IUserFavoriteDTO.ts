import { UserBookStatus } from "@/entities/UserFavorite/UserBookStatuses"

export interface IUserFavoriteDTO {
    items: {
        status: UserBookStatus
        books: {
            id: number
            name: string
            description: string
            imageUrl: string
        }[]
    }[]
}
