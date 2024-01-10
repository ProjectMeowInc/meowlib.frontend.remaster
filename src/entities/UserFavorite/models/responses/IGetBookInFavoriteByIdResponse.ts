import { UserBookStatus } from "@/entities/UserFavorite/UserBookStatuses"

export interface IGetBookInFavoriteByIdResponse {
    id: number
    status: UserBookStatus
    book: {
        id: number
        name: string
        description: string
        imageUrl: string
    }
}
