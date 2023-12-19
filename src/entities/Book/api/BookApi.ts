import { Result } from "@/shared/services/Result/Result"
import { HTTPResult } from "@/shared/services/HTTPResult/HTTPResult"
import { IBookRequest, IPostBookRequest } from "@/entities/Book/model/request/BookRequest"
import { EmptyResult } from "@/shared/services/Result/EmptyResult"
import { IBooksGetResponse } from "@/entities/Book/model/response/BooksGetResponse"
import { IBooksResponse } from "@/entities/Book/model/response/BooksResponse"
import { IUpdateBookRequest } from "@/entities/Book/model/request/UpdateBookRequest"
import { IUpdateBookTagRequest } from "@/entities/Book/model/request/UpdateBookTagRequest"

export class BookApi {
    static async getBooks(): Promise<Result<IBooksGetResponse[]>> {
        const result = await new HTTPResult<IBooksResponse>()
            .withUrl("/books")
            .sendAsync()

        if (result.hasError()) {
            return Result.withError(result.getError())
        }

        return Result.withOk(result.unwrap().items)
    }

    static async postBooks(requestData: IPostBookRequest): Promise<EmptyResult> {
        const result = await new HTTPResult<void>().withUrl("/books")
            .withPostMethod()
            .withBody(requestData)
            .sendAsync()

        if (result.hasError()) {
            return EmptyResult.withError(result.getError())
        }

        return EmptyResult.withOk()
    }

    static async deleteBooks(id: number): Promise<EmptyResult> {
        const result = await new HTTPResult<void>().withUrl(`/books/${id}`)
            .withDeleteMethod()
            .sendAsync()

        if (result.hasError()) {
            return EmptyResult.withError(result.getError())
        }

        return EmptyResult.withOk()
    }

    static async getBookByID(id: number): Promise<Result<IBookRequest>> {
        const result = await new HTTPResult<IBookRequest>()
            .withUrl(`/books/${id}`)
            .withGetMethod()
            .sendAsync()

        if (result.hasError()) {
            return Result.withError(result.getError())
        }

        return Result.withOk(result.unwrap())
    }

    static async updateBookInfo(bookId: number, updateData: IUpdateBookRequest): Promise<EmptyResult> {
        const result = await new HTTPResult<void>()
            .withUrl(`/books/${bookId}/info`)
            .withBody(updateData)
            .withPutMethod()
            .sendAsync()

        if (result.hasError()) {
            return EmptyResult.withError(result.getError())
        }

        return EmptyResult.withOk()
    }

    static async updateBookAuthor(bookId: number, authorId: number): Promise<EmptyResult> {
        const result = await new HTTPResult<void>()
            .withUrl(`/books/${bookId}/author/${authorId}`)
            .withPutMethod()
            .sendAsync()

        if (result.hasError()) {
            return EmptyResult.withError(result.getError())
        }

        return EmptyResult.withOk()
    }

    static async updateBookTags(bookId: number, requestData: IUpdateBookTagRequest): Promise<EmptyResult> {
        const result = await new HTTPResult<void>()
            .withUrl(`/books/${bookId}/tags`)
            .withBody(requestData)
            .withPutMethod()
            .sendAsync()

        if (result.hasError()) {
            return EmptyResult.withError(result.getError())
        }

        return EmptyResult.withOk()
    }

    static async uploadImageBook(bookId: number, image: FormData): Promise<EmptyResult> {
        const result = await new HTTPResult<void>()
            .withUrl(`/books/${bookId}/image`)
            .withBody(image)
            .withPutMethod()
            .sendAsync()

        if (result.hasError()) {
            return EmptyResult.withError(result.getError())
        }

        return EmptyResult.withOk()
    }
}
