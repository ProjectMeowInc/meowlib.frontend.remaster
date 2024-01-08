import { FormEvent, useState } from "react"
import { IUpdateBookRequest } from "@/entities/Book/models/requests/UpdateBookRequest"
import { BookService } from "@/entities/Book/service/BookService"
import { AlertService } from "@/shared/services/AlertService"
import { IOnChangeEvent } from "@/shared/models/events/IOnChangeEvent"

export const useUpdateInfoBookPage = (bookId: number) => {
    const [info, setInfo] = useState<IUpdateBookRequest>({
        name: "",
        description: "",
    })

    const SubmitInfoHandler = async (e: FormEvent) => {
        e.preventDefault()

        const result = await BookService.updateBookInfo(bookId, info)

        if (result.hasError()) {
            return AlertService.errorMessage(result.getError().errorMessage)
        }

        return AlertService.successMessage("Информация успешно обновлена")
    }

    const ChangeInfoHandler = ({ name, newValue }: IOnChangeEvent) => {
        setInfo((prevState) => ({
            ...prevState,
            [name]: newValue,
        }))
    }

    return {
        SubmitInfoHandler,
        ChangeInfoHandler,
    }
}
