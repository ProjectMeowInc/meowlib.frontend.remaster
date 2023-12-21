import {Result} from "@/shared/services/Result/Result";
import {IShortBookDto} from "@/entities/Book/models/dto/ShortBookDto";
import {BookApi} from "@/entities/Book/api/BookApi";
import {LogService} from "@/shared/services/LogService";
import {IBookDto} from "@/entities/Book/models/dto/BookDto";

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

        return Result.withOk(result.unwrap())
    }
}