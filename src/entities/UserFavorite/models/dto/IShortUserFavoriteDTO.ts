import { UserBookStatus } from "@/entities/UserFavorite/UserBookStatuses"

export interface IShortUserFavoriteDTO {
    id: number
    status: UserBookStatus
    book: {
        id: number
        name: string
        description: string
        imageUrl: string
    }
}
