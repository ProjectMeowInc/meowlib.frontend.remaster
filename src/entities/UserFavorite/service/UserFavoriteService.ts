import {EmptyResult} from "@/shared/services/Result/EmptyResult";
import {UserFavoriteApi} from "@/entities/UserFavorite/api/UserFavoriteApi";
import {Result} from "@/shared/services/Result/Result";
import {IUserFavoriteDTO} from "@/entities/UserFavorite/models/dto/IUserFavoriteDTO";
import {IShortUserFavoriteDTO} from "@/entities/UserFavorite/models/dto/IShortUserFavoriteDTO";
import {UserBookStatus} from "@/entities/UserFavorite/UserBookStatuses";

export class UserFavoriteService {
    static async addBookInFavorite(bookId: number, status: UserBookStatus): Promise<EmptyResult> {
        return await UserFavoriteApi.addBookInFavorite({bookId, status})
    }

    static async getAllBooksInFavorite(): Promise<Result<IUserFavoriteDTO>> {
        const result = await UserFavoriteApi.getAllBooksInFavorite()

        if (result.hasError()) {
            return Result.withError(result.getError())
        }

        return Result.withOk(result.unwrap())
    }

    static async getBookInFavorite(bookId: number): Promise<Result<IShortUserFavoriteDTO>> {
        const result = await UserFavoriteApi.getBookInFavoriteById(bookId)

        if (result.hasError()) {
            return Result.withError(result.getError())
        }

        return Result.withOk(result.unwrap())
    }
}