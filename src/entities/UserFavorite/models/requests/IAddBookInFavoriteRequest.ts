import { IUserFavoriteCategoryModel } from "@/entities/UserFavorite/models/categoryModel/IUserFavoriteCategoryModel"

export interface IAddBookInFavoriteRequest {
    bookId: number
    status: IUserFavoriteCategoryModel
}
