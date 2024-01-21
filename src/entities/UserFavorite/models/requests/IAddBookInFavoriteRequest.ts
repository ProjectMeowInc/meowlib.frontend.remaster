import { UserBookStatus } from "@/entities/UserFavorite/UserBookStatuses"

export interface IAddBookInFavoriteRequest {
    bookId: number
    status: UserBookStatus
}
