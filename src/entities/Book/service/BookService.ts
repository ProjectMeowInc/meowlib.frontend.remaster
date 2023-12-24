import { Result } from "@/shared/services/Result/Result"
import { BookApi } from "@/entities/Book/api/BookApi"
import { EmptyResult } from "@/shared/services/Result/EmptyResult"
import { BookGetResponseDTO } from "@/entities/Book/model/dto/BookGetResponseDTO"
import { IBookModelDTO } from "@/entities/Book/model/dto/BookModelDTO"
import { IUpdateBookRequest } from "@/entities/Book/model/request/UpdateBookRequest"
import { IUpdateBookTagRequest } from "@/entities/Book/model/request/UpdateBookTagRequest"
import { ICreateBook } from "@/entities/Book/model/request/CreateBookRequest";

export class BookService {
    static async getBooks(): Promise<Result<BookGetResponseDTO[]>> {
        const result = await BookApi.getBooks()

        if (result.hasError()) {
            return Result.withError(result.getError())
        }

        return Result.withOk(result.unwrap().items)
    }

    static async createBook(requestData: ICreateBook): Promise<EmptyResult> {
        return await BookApi.createBook(requestData)
    }

    static async deleteBookById(id: number): Promise<EmptyResult> {
        return await BookApi.deleteBookById(id)
    }

    static async getBookById(id: number): Promise<Result<IBookModelDTO>> {
        return await BookApi.getBookById(id)
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
}
