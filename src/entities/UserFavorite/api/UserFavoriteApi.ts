import { IAddBookInFavoriteRequest } from "@/entities/UserFavorite/models/requests/IAddBookInFavoriteRequest"
import { HTTPRequest } from "@/shared/services/HTTPResult/HTTPRequest"
import { EmptyResult } from "@/shared/services/Result/EmptyResult"
import { Result } from "@/shared/services/Result/Result"
import { IGetAllBooksInFavoriteResponse } from "@/entities/UserFavorite/models/responses/IGetAllBooksInFavoriteResponse"
import { IGetBookInFavoriteByIdResponse } from "@/entities/UserFavorite/models/responses/IGetBookInFavoriteByIdResponse"

export class UserFavoriteApi {
    static async addBookInFavorite(requestData: IAddBookInFavoriteRequest): Promise<EmptyResult> {
        const result = await new HTTPRequest<void>()
            .withUrl(`/v1/users/favorite`)
            .withPostMethod()
            .withAuth()
            .withBody(requestData)
            .sendAsync()

        if (result.hasError()) {
            return EmptyResult.withError(result.getError())
        }

        return EmptyResult.withOk()
    }

    static async getAllBooksInFavorite(): Promise<Result<IGetAllBooksInFavoriteResponse>> {
        const result = await new HTTPRequest<IGetAllBooksInFavoriteResponse>()
            .withUrl(`/v1/users/favorite/my`)
            .withGetMethod()
            .withAuth()
            .sendAsync()

        if (result.hasError()) {
            return Result.withError(result.getError())
        }

        return Result.withOk(result.unwrap())
    }

    static async getBookInFavoriteById(bookId: number): Promise<Result<IGetBookInFavoriteByIdResponse>> {
        const result = await new HTTPRequest<IGetBookInFavoriteByIdResponse>()
            .withUrl(`/v1/users/favorite/my/book/${bookId}`)
            .withGetMethod()
            .withAuth()
            .sendAsync()

        if (result.hasError()) {
            return Result.withError(result.getError())
        }

        return Result.withOk(result.unwrap())
    }
}
