import {FormEvent, useState} from "react";
import {useRouter} from "next/navigation";
import {IOnChangeEvent} from "@/shared/models/events/IOnChangeEvent";
import {AlertService} from "@/shared/services/AlertService";
import {BookService} from "@/entities/Book/service/BookService";
import {ICreateBook} from "@/entities/Book/models/requests/CreateBookRequest";

export const useCreateForm = () => {
    const [data, setData] = useState<ICreateBook>({
        name: "",
        description: "",
    })

    const router = useRouter()

    const ChangeHandler = ({ name, newValue }: IOnChangeEvent) => {
        setData((prevState) => ({
            ...prevState,
            [name]: newValue,
        }))
    }

    const SubmitHandler = async (e: FormEvent) => {
        e.preventDefault()

        const result = await BookService.createBook(data)

        if (result.hasError()) {
            return AlertService.errorMessage(result.getError().errorMessage)
        }

        router.back()
        router.refresh()
        return AlertService.successMessage("Книга успешно создана")
    }

    return {
        SubmitHandler,
        ChangeHandler,
    }
}
