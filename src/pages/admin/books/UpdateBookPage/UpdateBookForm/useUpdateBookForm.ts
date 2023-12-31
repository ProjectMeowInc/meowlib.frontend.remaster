import {FormEvent, useState} from "react";
import {useRouter} from "next/navigation";
import {IOnChangeEvent} from "@/shared/models/events/IOnChangeEvent";
import {AlertService} from "@/shared/services/AlertService";
import {IBookDto} from "@/entities/Book/models/dto/BookDto";
import {BookService} from "@/entities/Book/service/BookService";

export const useUpdateBookForm = (bookId: number) => {
    const [data, setData] = useState<IBookDto>({
        id: 0,
        name: "",
        description: "",
        imageUrl: '',
        author: {
            id: 0,
            name: ''
        },
        tags: [],
        translations: [],
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

        const result = await BookService.updateBookInfo(bookId, data)

        if (result.hasError()) {
            return AlertService.errorMessage(result.getError().errorMessage)
        }

        router.back()
        router.refresh()
        return AlertService.successMessage("Тег успешно обновлён")
    }

    return {
        ChangeHandler,
        SubmitHandler,
    }
}
