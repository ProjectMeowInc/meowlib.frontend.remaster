import {Result} from "@/shared/services/Result/Result";
import {IGetAllBookResponse} from "@/entities/Book/models/response/GetAllBookResponse";
import {HTTPResult} from "@/shared/services/HTTPResult/HTTPResult";
import {IGetBookByIdResponse} from "@/entities/Book/models/response/IGetBookByIdResponse";

export class BookApi {
    static async getAllBooksAsync(): Promise<Result<IGetAllBookResponse>> {
        return await new HTTPResult<IGetAllBookResponse>()
            .withUrl("/v1/books")
            .withGetMethod()
            .sendAsync();
    }
    
    static async getBookByIdAsync(bookId: number): Promise<Result<IGetBookByIdResponse>> {
        return await new HTTPResult<IGetBookByIdResponse>()
            .withUrl(`/v1/books/${bookId}`)
            .withGetMethod()
            .sendAsync();
    }
}