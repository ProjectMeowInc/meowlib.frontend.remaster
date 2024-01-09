import { BookService } from "@/entities/Book/service/BookService"
import { AlertService } from "@/shared/services/AlertService"

export const useDeleteBookPeopleItem = () => {
    const DeletePeopleHandler = async (bookId: number, peopleId: number) => {
        const result = await BookService.deletePeopleBook(bookId, peopleId)

        if (result.hasError()) {
            return AlertService.errorMessage(result.getError().errorMessage)
        }

        return AlertService.successMessage("Человек успешно удален")
    }

    return {
        DeletePeopleHandler,
    }
}
