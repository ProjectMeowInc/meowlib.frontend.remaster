import {EmptyResult} from "@/shared/services/Result/EmptyResult";
import {UserFavoriteApi} from "@/entities/UserFavorite/api/UserFavoriteApi";
import {Result} from "@/shared/services/Result/Result";
import {IUserFavoritesList} from "@/entities/UserFavorite/models/dto/IUserFavoritesList";
import {IUserFavoriteBook} from "@/entities/UserFavorite/models/dto/IUserFavoriteBook";
import {UserBookStatus} from "@/entities/UserFavorite/UserBookStatuses";

export class UserFavoriteService {
    static async addBookInFavorite(bookId: number, status: UserBookStatus): Promise<EmptyResult> {
        return await UserFavoriteApi.addBookInFavorite({bookId, status})
    }

    static async getAllBooksInFavorite(): Promise<Result<IUserFavoritesList>> {
        const result = await UserFavoriteApi.getAllBooksInFavorite()

        if (result.hasError()) {
            return Result.withError(result.getError())
        }

        return Result.withOk(result.unwrap())
    }

    static async getBookInFavorite(bookId: number): Promise<Result<IUserFavoriteBook>> {
        const result = await UserFavoriteApi.getBookInFavoriteById(bookId)

        if (result.hasError()) {
            return Result.withError(result.getError())
        }

        return Result.withOk(result.unwrap())
    }
}