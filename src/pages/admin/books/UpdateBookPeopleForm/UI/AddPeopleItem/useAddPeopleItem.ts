import { PeopleRoleType } from "@/entities/People/types/PeopleRoleType"
import { BookService } from "@/entities/Book/service/BookService"
import { IAddPeopleToBookRequest } from "@/entities/Book/models/requests/AddPeopleToBookRequest"
import { AlertService } from "@/shared/services/AlertService"

export const useAddPeopleItem = (bookId: number, id: number, role: PeopleRoleType) => {
    const AddPeopleHandler = async (bookId: number, peopleId: number, peopleRole: PeopleRoleType) => {
        const people = {
            peopleId: peopleId,
            role: peopleRole,
        }
        const result = await BookService.addPeopleToBook(bookId, people as IAddPeopleToBookRequest)

        if (result.hasError()) {
            return AlertService.errorMessage(result.getError().errorMessage)
        }

        return AlertService.successMessage("Человек успешно добавлен к книге")
    }

    const handleAddClick = async () => {
        await AddPeopleHandler(bookId, id, role)
    }

    return {
        AddPeopleHandler,
        handleAddClick,
    }
}
