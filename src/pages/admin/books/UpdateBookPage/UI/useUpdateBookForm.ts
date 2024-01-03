import {FormEvent, useState} from "react";
import {useRouter} from "next/navigation";
import {IOnChangeEvent} from "@/shared/models/events/IOnChangeEvent";
import {AlertService} from "@/shared/services/AlertService";
import {BookService} from "@/entities/Book/service/BookService";
import {IUpdateBookRequest} from "@/entities/Book/models/requests/UpdateBookRequest";
import {IAddPeopleToBook} from "@/entities/Book/models/requests/AddPeopleToBook";
import {IUpdateBookTagRequest} from "@/entities/Book/models/requests/UpdateBookTagRequest";

export const useUpdateBookForm = (bookId: number) => {
    const [info, setInfo] = useState<IUpdateBookRequest>({
        name: '',
        description: ''
    })

    const router = useRouter()

    const [image, setImage] = useState<FormData>()

    const [people, setPeople] = useState<IAddPeopleToBook>({
        peopleId: 0,
        role: ''
    })

    const [tags, setTags] = useState<IUpdateBookTagRequest>({
        tags: []
    })


   // const SubmitImageHandler = async (e: FormEvent) => {
   //      e.preventDefault()
   //
   //      // const result = await BookService.uploadImageBook(bookId, image)
   //
   //     if (result.hasError()) {
   //         return AlertService.errorMessage(result.getError().errorMessage)
   //     }
   //
   //     router.back()
   //     router.refresh()
   //     return AlertService.successMessage("Изображение успешно обновлено")
   //
   //  }

    const ChangeInfoHandler = ({name, newValue}: IOnChangeEvent) => {
        setInfo((prevState) => ({
           ...prevState,
           [name]: newValue
        }))
    }

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

    return {
        ChangeInfoHandler,
        SubmitInfoHandler,
        // SubmitImageHandler,
    }
}
