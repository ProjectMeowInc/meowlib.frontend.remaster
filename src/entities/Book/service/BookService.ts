import {Result} from "@/shared/services/Result/Result";
import {IShortBookDto} from "@/entities/Book/models/dto/ShortBookDto";
import {BookApi} from "@/entities/Book/api/BookApi";
import {LogService} from "@/shared/services/LogService";
import {IBookDto} from "@/entities/Book/models/dto/BookDto";
import {DEFAULT_BOOK_IMAGE} from "@/app/consts";
import {IPostBookRequest} from "@/entities/Book/model/request/PostBookRequest";
import {EmptyResult} from "@/shared/services/Result/EmptyResult";
import {IUpdateBookRequest} from "@/entities/Book/model/request/UpdateBookRequest";
import {IUpdateBookTagRequest} from "@/entities/Book/model/request/UpdateBookTagRequest";

export class BookService {
    static async getAllBooksAsync(): Promise<Result<IShortBookDto[]>> {
        const result = await BookApi.getAllBooksAsync()
        if (result.hasError()) {
            const error = result.getError();
            LogService.error(`Ошибка получения списка книг: ${error.errorMessage}`, this.name)
            return Result.withError(error)
        }

        return Result.withOk(result.unwrap().items)
    }

    static async getBookByIdAsync(bookId: number): Promise<Result<IBookDto>> {
        const result = await BookApi.getBookByIdAsync(bookId)
        if (result.hasError()) {
            const error = result.getError();
            LogService.error(`Ошибка получения книги по Id: ${error.errorMessage}. Id книги: ${bookId}`, this.name)
            return Result.withError(error)
        }

        const book = result.unwrap();

        return Result.withOk({
            ...book,
            imageUrl: book.imageUrl ?? DEFAULT_BOOK_IMAGE
        })
    }

    static async postBooks(requestData: IPostBookRequest): Promise<EmptyResult> {
        return await BookApi.postBooks(requestData)
    }

    static async deleteBooks(id: number): Promise<EmptyResult> {
        return await BookApi.deleteBooks(id)
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