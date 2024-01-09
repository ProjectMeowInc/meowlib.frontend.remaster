import { useRouter } from "next/navigation"
import { AlertService } from "@/shared/services/AlertService"
import { BookService } from "@/entities/Book/service/BookService"
import { useState } from "react"
import { IShortBookDto } from "@/entities/Book/models/dto/ShortBookDto"
import { useFirstLoadingAsync } from "@/shared/hooks/useFirstLoadingAsync"

export const useMainBooksPage = () => {
    const router = useRouter()
    const [booksList, setBooksList] = useState<IShortBookDto[] | null>(null)

    useFirstLoadingAsync(async () => {
        const getBooksResult = await BookService.getBooks()

        if (getBooksResult.hasError()) {
            return AlertService.errorMessage(getBooksResult.getError().errorMessage)
        }
        setBooksList(getBooksResult.unwrap())
    })

    const DeleteBookHandler = async (bookId: number) => {
        const result = await BookService.deleteBookById(bookId)

        if (result.hasError()) {
            return AlertService.errorMessage(result.getError().errorMessage)
        }

        router.refresh()
    }

    return {
        booksList,
        DeleteBookHandler,
    }
}
