import { Result } from "@/shared/services/Result/Result"
import { HTTPRequest } from "@/shared/services/HTTPResult/HTTPRequest"
import { EmptyResult } from "@/shared/services/Result/EmptyResult"
import { IUpdateBookRequest } from "@/entities/Book/models/requests/UpdateBookRequest"
import { IUpdateBookTagRequest } from "@/entities/Book/models/requests/UpdateBookTagRequest"
import { ICreateBook } from "@/entities/Book/models/requests/CreateBookRequest"
import { IGetBookByIdResponse } from "@/entities/Book/models/response/IGetBookByIdResponse"
import { IGetAllBookResponse } from "@/entities/Book/models/response/IGetAllBookResponse"
import { IAddPeopleToBookRequest } from "@/entities/Book/models/requests/AddPeopleToBookRequest"

export class BookApi {
    static async getBooks(): Promise<Result<IGetAllBookResponse>> {
        const result = await new HTTPRequest<IGetAllBookResponse>().withUrl("/v2/books").withGetMethod().sendAsync()

        if (result.hasError()) {
            return Result.withError(result.getError())
        }

        return Result.withOk(result.unwrap())
    }

    static async createBook(requestData: ICreateBook): Promise<EmptyResult> {
        const result = await new HTTPRequest<void>()
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
        const result = await new HTTPRequest<void>()
            .withUrl(`/v1/books/${id}`)
            .withDeleteMethod()
            .withAuth()
            .sendAsync()

        if (result.hasError()) {
            return EmptyResult.withError(result.getError())
        }

        return EmptyResult.withOk()
    }

    static async getBookById(id: number): Promise<Result<IGetBookByIdResponse>> {
        const result = await new HTTPRequest<IGetBookByIdResponse>()
            .withUrl(`/v2/books/${id}`)
            .withGetMethod()
            .sendAsync()

        if (result.hasError()) {
            return Result.withError(result.getError())
        }

        return Result.withOk(result.unwrap())
    }

    static async updateBookInfo(bookId: number, updateData: IUpdateBookRequest): Promise<EmptyResult> {
        const result = await new HTTPRequest<void>()
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
        const result = await new HTTPRequest<void>()
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
        const result = await new HTTPRequest<void>()
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
        const result = await new HTTPRequest<void>()
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

    static async addPeopleToBook(bookId: number, requestData: IAddPeopleToBookRequest): Promise<EmptyResult> {
        const result = await new HTTPRequest<void>()
            .withUrl(`/v1/books/${bookId}/people`)
            .withAuth()
            .withBody(requestData)
            .withPostMethod()
            .sendAsync()

        if (result.hasError()) {
            return EmptyResult.withError(result.getError())
        }

        return EmptyResult.withOk()
    }

    static async deletePeopleBook(bookId: number, peopleId: number): Promise<EmptyResult> {
        const result = await new HTTPRequest<void>()
            .withUrl(`/v1/books/${bookId}/people/${peopleId}`)
            .withAuth()
            .withBody({ bookId, peopleId })
            .withDeleteMethod()
            .sendAsync()

        if (result.hasError()) {
            return EmptyResult.withError(result.getError())
        }

        return EmptyResult.withOk()
    }
}
