import {Result} from "@/shared/services/Result/Result";
import {IShortBookDto} from "@/entities/Book/models/dto/ShortBookDto";
import {BookApi} from "@/entities/Book/api/BookApi";
import {LogService} from "@/shared/services/LogService";
import {IBookDto} from "@/entities/Book/models/dto/BookDto";
import {DEFAULT_BOOK_IMAGE} from "@/app/consts";

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
            // todo: remove this
            description: "Диана Сусфилд, незаконнорожденная дочь герцога Сусфилда, была в семье гадким утёнком. Когда она привлекла внимание Ребекки, первой принцессы, посвятила свой меч ей. Однако лишилась головы, будучи обвинённой в покушении на Ребекку, которая стала императрицей. Если точнее, Диана вернулась в то время, когда ещё не повстречала Ребекку, и попыталась изменить будущее, чтобы не пасть от её руки.\n" +
                "— Если правда не хочешь выходить замуж, можешь отказаться, если так угодно. Клянусь своим именем. Но если нет, я, как твой супруг, исполню любое твоё желание.\n" +
                "Выйти замуж по расчёту за принца Кейдена — единственного, кто относился к ней как к человеку?",
            // todo: remove this
            author: {
                id: -1,
                name: "N/A"
            },
            // todo: remove this
            tags: [
                {
                    id: 1,
                    name: "Боевик",
                    description: "test description"
                },
                {
                    id: 2,
                    name: "Драмма",
                    description: "test description"
                }
            ],
            // todo: remove this
            translations: [
                {
                    id: 1,
                    name: "Великий и ужастный"
                },
                {
                    id: 2,
                    name: "Черно-белый"
                }
            ],
            imageUrl: book.imageUrl ?? DEFAULT_BOOK_IMAGE
        })
    }
}