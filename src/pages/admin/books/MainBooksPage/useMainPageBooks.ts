import {useRouter} from "next/navigation";
import {AlertService} from "@/shared/services/AlertService";
import {BookService} from "@/entities/Book/service/BookService";

export const useMainPageBooks = () => {
    const router = useRouter()

    const DeleteHandler = async (bookId: number) => {
        const result = await BookService.deleteBookById(bookId)

        if (result.hasError()) {
            return AlertService.errorMessage(result.getError().errorMessage)
        }

        router.refresh()
    }

    return {
        DeleteHandler,
    }
}