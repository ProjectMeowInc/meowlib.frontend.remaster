import {IAddBookInFavoriteRequest} from "@/entities/UserFavorite/models/requests/IAddBookInFavoriteRequest";
import {EmptyResult} from "@/shared/services/Result/EmptyResult";
import {UserFavoriteApi} from "@/entities/UserFavorite/api/UserFavoriteApi";
import {Result} from "@/shared/services/Result/Result";
import {IUserFavoriteDTO} from "@/entities/UserFavorite/models/dto/IUserFavoriteDTO";
import {IShortUserFavoriteDTO} from "@/entities/UserFavorite/models/dto/IShortUserFavoriteDTO";

export class UserFavoriteService {
    static async addBookInFavorite(requestData: IAddBookInFavoriteRequest): Promise<EmptyResult> {
        return await UserFavoriteApi.addBookInFavorite(requestData)
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