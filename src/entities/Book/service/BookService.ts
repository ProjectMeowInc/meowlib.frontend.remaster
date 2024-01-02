import { Result } from "@/shared/services/Result/Result"
import { BookApi } from "@/entities/Book/api/BookApi"
import { EmptyResult } from "@/shared/services/Result/EmptyResult"
import { IUpdateBookRequest } from "@/entities/Book/models/requests/UpdateBookRequest"
import { IUpdateBookTagRequest } from "@/entities/Book/models/requests/UpdateBookTagRequest"
import { ICreateBook } from "@/entities/Book/models/requests/CreateBookRequest"
import { IBookDto } from "@/entities/Book/models/dto/BookDto"
import { IShortBookDto } from "@/entities/Book/models/dto/ShortBookDto"
import { DEFAULT_BOOK_IMAGE } from "@/app/consts"
import {IAddPeopleToBook} from "@/entities/Book/models/requests/AddPeopleToBook";

export class BookService {
    static async getBooks(): Promise<Result<IShortBookDto[]>> {
        const result = await BookApi.getBooks()

        if (result.hasError()) {
            return Result.withError(result.getError())
        }

        return Result.withOk(
            result.unwrap().items.map((book) => ({
                ...book,
                // todo: create valid link
                imageUrl: book.imageUrl ?? DEFAULT_BOOK_IMAGE,
            })),
        )
    }

    static async createBook(requestData: ICreateBook): Promise<EmptyResult> {
        return await BookApi.createBook(requestData)
    }

    static async deleteBookById(id: number): Promise<EmptyResult> {
        return await BookApi.deleteBookById(id)
    }

    static async getBookById(id: number): Promise<Result<IBookDto>> {
        const getBookResult = await BookApi.getBookById(id)
        if (getBookResult.hasError()) {
            return Result.withError(getBookResult.getError())
        }

        const data = getBookResult.unwrap()
        return Result.withOk(data)
    }

    static async updateBookInfo(bookId: number, updateData: IUpdateBookRequest): Promise<EmptyResult> {
        return await BookApi.updateBookInfo(bookId, updateData)
    }

    static async updateBookAuthor(bookId: number, authorId: number): Promise<EmptyResult> {
        return await BookApi.updateBookAuthor(bookId, authorId)
    }

    static async updateBookTags(bookId: number, requestData: IUpdateBookTagRequest): Promise<EmptyResult> {
        return await BookApi.updateBookTags(bookId, requestData)
    }

    static async uploadImageBook(bookId: number, image: FormData): Promise<EmptyResult> {
        return await BookApi.uploadImageBook(bookId, image)
    }

    static async addPeopleToBook(bookId: number, requestData: IAddPeopleToBook): Promise<EmptyResult> {
        return await BookApi.addPeopleToBook(bookId, requestData)
    }

    static async deletePeopleBook(bookId: number, peopleId: number): Promise<EmptyResult> {
        return await BookApi.deletePeopleBook(bookId, peopleId)
    }
}
