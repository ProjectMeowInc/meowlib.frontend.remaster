import {IUserFavoriteCategoryModel} from "@/entities/UserFavorite/models/categoryModel/IUserFavoriteCategoryModel";

export interface IUserFavoriteDTO {
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