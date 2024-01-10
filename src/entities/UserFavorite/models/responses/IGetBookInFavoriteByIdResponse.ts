import { IUserFavoriteCategoryModel } from "@/entities/UserFavorite/models/categoryModel/IUserFavoriteCategoryModel"

export interface IGetBookInFavoriteByIdResponse {
    id: number
    status: IUserFavoriteCategoryModel
    book: {
        id: number
        name: string
        description: string
        imageUrl: string
    }
}
