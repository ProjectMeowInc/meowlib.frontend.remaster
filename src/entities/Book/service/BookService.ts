import { Result } from "@/shared/services/Result/Result"
import { BookApi } from "@/entities/Book/api/BookApi"
import { EmptyResult } from "@/shared/services/Result/EmptyResult"
import { BookGetResponseDTO } from "@/entities/Book/model/dto/BookGetResponseDTO"
import { IBookModelDTO } from "@/entities/Book/model/dto/BookModelDTO"
import { IUpdateBookRequest } from "@/entities/Book/model/request/UpdateBookRequest"
import { IUpdateBookTagRequest } from "@/entities/Book/model/request/UpdateBookTagRequest"
import {IPostBookRequest} from "@/entities/Book/model/request/PostBookRequest";

export class BookService {
    static async getBooks(): Promise<Result<BookGetResponseDTO[]>> {
        return await BookApi.getBooks()
    }

    static async postBooks(requestData: IPostBookRequest): Promise<EmptyResult> {
        return await BookApi.postBooks(requestData)
    }

    static async deleteBooks(id: number): Promise<EmptyResult> {
        return await BookApi.deleteBooks(id)
    }

    static async getBookByID(id: number): Promise<Result<IBookModelDTO>> {
        return await BookApi.getBookByID(id)
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
