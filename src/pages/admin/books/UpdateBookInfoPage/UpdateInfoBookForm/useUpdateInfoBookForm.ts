import {FormEvent, useState} from "react";
import {IUpdateBookRequest} from "@/entities/Book/models/requests/UpdateBookRequest";
import {useRouter} from "next/navigation";
import {BookService} from "@/entities/Book/service/BookService";
import {AlertService} from "@/shared/services/AlertService";
import {IOnChangeEvent} from "@/shared/models/events/IOnChangeEvent";

export const useUpdateInfoBookForm = (bookId: number) => {
    const [info, setInfo] = useState<IUpdateBookRequest>({
        name: '',
        description: ''
    })

    const router = useRouter()

    const SubmitInfoHandler = async (e: FormEvent) => {
        e.preventDefault()

        const result = await BookService.updateBookInfo(bookId, info)

        if (result.hasError()) {
            return AlertService.errorMessage(result.getError().errorMessage)
        }

        router.back()
        router.refresh()
        return AlertService.successMessage("Информация успешно обновлена")
    }

    const ChangeInfoHandler = ({name, newValue}: IOnChangeEvent) => {
        setInfo((prevState) => ({
            ...prevState,
            [name]: newValue
        }))
    }

    return {
        SubmitInfoHandler,
        ChangeInfoHandler
    }
}