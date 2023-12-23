import {Result} from "@/shared/services/Result/Result";
import {IGetAllBookResponse} from "@/entities/Book/models/response/GetAllBookResponse";
import {HTTPResult} from "@/shared/services/HTTPResult/HTTPResult";
import {IGetBookByIdResponse} from "@/entities/Book/models/response/IGetBookByIdResponse";
import { Result } from "@/shared/services/Result/Result"
import { HTTPResult } from "@/shared/services/HTTPResult/HTTPResult"
import { IBook } from "@/entities/Book/model/request/BookModel"
import { EmptyResult } from "@/shared/services/Result/EmptyResult"
import { IUpdateBookRequest } from "@/entities/Book/model/request/UpdateBookRequest"
import { IUpdateBookTagRequest } from "@/entities/Book/model/request/UpdateBookTagRequest"
import { IPostBookRequest } from "@/entities/Book/model/request/PostBookRequest"


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

    static async postBooks(requestData: IPostBookRequest): Promise<EmptyResult> {
        const result = await new HTTPResult<void>()
            .withUrl("/v1/books")
            .withPostMethod()
            .withAuth()
            .withBody(requestData)
            .sendAsync()

        if (result.hasError()) {
            return EmptyResult.withError(result.getError())
        }

        return EmptyResult.withOk()
    }

    static async deleteBooks(id: number): Promise<EmptyResult> {
        const result = await new HTTPResult<void>().withUrl(`/v1/books/${id}`)
            .withDeleteMethod()
            .withAuth()
            .sendAsync()

        if (result.hasError()) {
            return EmptyResult.withError(result.getError())
        }

        return EmptyResult.withOk()
    }

    static async updateBookInfo(bookId: number, updateData: IUpdateBookRequest): Promise<EmptyResult> {
        const result = await new HTTPResult<void>()
            .withUrl(`/v1/books/${bookId}/info`)
            .withBody(updateData)
            .withAuth()
            .withPutMethod()
            .sendAsync()

        if (result.hasError()) {
            return EmptyResult.withError(result.getError())
        }

        return EmptyResult.withOk()
    }

    static async updateBookAuthor(bookId: number, authorId: number): Promise<EmptyResult> {
        const result = await new HTTPResult<void>()
            .withUrl(`/v1/books/${bookId}/author/${authorId}`)
            .withAuth()
            .withPutMethod()
            .sendAsync()

        if (result.hasError()) {
            return EmptyResult.withError(result.getError())
        }

        return EmptyResult.withOk()
    }

    static async updateBookTags(bookId: number, requestData: IUpdateBookTagRequest): Promise<EmptyResult> {
        const result = await new HTTPResult<void>()
            .withUrl(`/v1/books/${bookId}/tags`)
            .withBody(requestData)
            .withAuth()
            .withPutMethod()
            .sendAsync()

        if (result.hasError()) {
            return EmptyResult.withError(result.getError())
        }

        return EmptyResult.withOk()
    }

    static async uploadImageBook(bookId: number, image: FormData): Promise<EmptyResult> {
        const result = await new HTTPResult<void>()
            .withUrl(`/v1/books/${bookId}/image`)
            .withBody(image)
            .withPutMethod()
            .sendAsync()

        if (result.hasError()) {
            return EmptyResult.withError(result.getError())
        }

        return EmptyResult.withOk()
    }
}