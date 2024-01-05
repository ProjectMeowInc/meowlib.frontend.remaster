import React, {FormEvent, useState} from "react";
import {useRouter} from "next/navigation";
import {IOnChangeEvent} from "@/shared/models/events/IOnChangeEvent";
import {AlertService} from "@/shared/services/AlertService";
import {BookService} from "@/entities/Book/service/BookService";
import {IUpdateBookRequest} from "@/entities/Book/models/requests/UpdateBookRequest";
import {IAddPeopleToBook} from "@/entities/Book/models/requests/AddPeopleToBook";
import {PeopleRoleType} from "@/entities/People/types/PeopleRoleType";

export const useUpdateBookForm = (bookId: number) => {
    const [info, setInfo] = useState<IUpdateBookRequest>({
        name: '',
        description: ''
    })

    const [image, setImage] = useState<FormData | null>(null)



    const router = useRouter()

    function UpdateImageHandler(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.files) {
            const file = event.target.files[0]
            const formData = new FormData()
            formData.append('image', file)
            setImage(formData)
        }
    }

    const SubmitImageHandler = async (e: FormEvent) => {
        e.preventDefault()

        const result = await BookService.uploadImageBook(bookId, image as FormData)

        if (result.hasError()) {
            return AlertService.errorMessage(result.getError().errorMessage)
        }

        router.back()
        router.refresh()
        return AlertService.successMessage("Изображение успешно обновлено")
    }

    const DeletePeopleHandler = async (bookId: number, peopleId: number) => {
        const result = await BookService.deletePeopleBook(bookId, peopleId)

        if (result.hasError()) {
            return AlertService.errorMessage(result.getError().errorMessage)
        }

        return AlertService.successMessage('Человек успешно удален')
    }

    const AddPeopleHandler = async (bookId: number, peopleId: number, peopleRole: PeopleRoleType) => {
        const people = {
            peopleId: peopleId,
            role: peopleRole
        }
        const result = await BookService.addPeopleToBook(bookId, people as IAddPeopleToBook)

        if (result.hasError()) {
            return AlertService.errorMessage(result.getError().errorMessage)
        }

        return AlertService.successMessage('Человек успешно добавлен к книге')
    }

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
        DeletePeopleHandler,
        UpdateImageHandler,
        SubmitImageHandler,
        AddPeopleHandler,
    }
}
