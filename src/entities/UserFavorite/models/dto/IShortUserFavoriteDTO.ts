import {IUserFavoriteCategoryModel} from "@/entities/UserFavorite/models/categoryModel/IUserFavoriteCategoryModel";

export interface IShortUserFavoriteDTO {
    id: number
    status: IUserFavoriteCategoryModel
    book: {
        id: number
        name: string
        description: string
        imageUrl: string
    }
}