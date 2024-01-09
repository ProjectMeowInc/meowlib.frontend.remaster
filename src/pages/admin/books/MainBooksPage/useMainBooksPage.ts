import { useRouter } from "next/navigation"
import { AlertService } from "@/shared/services/AlertService"
import { BookService } from "@/entities/Book/service/BookService"

export const useMainBooksPage = () => {
    const router = useRouter()

    const DeleteBookHandler = async (bookId: number) => {
        const result = await BookService.deleteBookById(bookId)

        if (result.hasError()) {
            return AlertService.errorMessage(result.getError().errorMessage)
        }

        router.refresh()
    }

    return {
        DeleteBookHandler,
    }
}
