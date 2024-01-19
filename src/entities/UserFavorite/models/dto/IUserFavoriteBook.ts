import { UserBookStatus } from "@/entities/UserFavorite/UserBookStatuses"

export interface IUserFavoriteBook {
    id: number
    status: UserBookStatus
    book: {
        id: number
        name: string
        description: string
        imageUrl: string
    }
}
