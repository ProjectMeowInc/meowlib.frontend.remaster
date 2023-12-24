import { Result } from "@/shared/services/Result/Result"
import { HTTPResult } from "@/shared/services/HTTPResult/HTTPResult"
import { IBook } from "@/entities/Book/model/request/BookModel"
import { EmptyResult } from "@/shared/services/Result/EmptyResult"
import { IGetBooksResponse } from "@/entities/Book/model/response/GetBooksResponse"
import { IUpdateBookRequest } from "@/entities/Book/model/request/UpdateBookRequest"
import { IUpdateBookTagRequest } from "@/entities/Book/model/request/UpdateBookTagRequest"
import { ICreateBook } from "@/entities/Book/model/request/CreateBookRequest"

export class BookApi {

    static async getBooks(): Promise<Result<IGetBooksResponse>> {
        const result = await new HTTPResult<IGetBooksResponse>()
            .withUrl("/v1/books")
            .withGetMethod()
            .sendAsync()

        if (result.hasError()) {
            return Result.withError(result.getError())
        }

        return Result.withOk(result.unwrap())
    }

    static async createBook(requestData: ICreateBook): Promise<EmptyResult> {
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

    static async deleteBookById(id: number): Promise<EmptyResult> {
        const result = await new HTTPResult<void>().withUrl(`/v1/books/${id}`)
            .withDeleteMethod()
            .withAuth()
            .sendAsync()

        if (result.hasError()) {
            return EmptyResult.withError(result.getError())
        }

        return EmptyResult.withOk()
    }

    static async getBookById(id: number): Promise<Result<IBook>> {
        const result = await new HTTPResult<IBook>()
            .withUrl(`/v1/books/${id}`)
            .withGetMethod()
            .sendAsync()

        if (result.hasError()) {
            return Result.withError(result.getError())
        }

        return Result.withOk(result.unwrap())
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
            .withAuth()
            .withBody(image)
            .withPutMethod()
            .sendAsync()

        if (result.hasError()) {
            return EmptyResult.withError(result.getError())
        }

        return EmptyResult.withOk()
    }
}
