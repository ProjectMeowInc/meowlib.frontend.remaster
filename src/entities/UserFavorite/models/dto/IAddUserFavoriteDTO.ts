import {UserBookStatus} from "@/entities/UserFavorite/UserBookStatuses";

export interface IAddUserFavoriteDTO {
    bookId: number
    status: UserBookStatus
}