import { UserBookStatus } from "@/entities/UserFavorite/UserBookStatuses"

export interface IGetAllBooksInFavoriteResponse {
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
