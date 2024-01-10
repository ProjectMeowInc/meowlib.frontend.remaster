import { IUserFavoriteCategoryModel } from "@/entities/UserFavorite/models/categoryModel/IUserFavoriteCategoryModel"

export interface IGetAllBooksInFavoriteResponse {
    items: {
        status: IUserFavoriteCategoryModel
        books: {
            id: number
            name: string
            description: string
            imageUrl: string
        }[]
    }[]
}
