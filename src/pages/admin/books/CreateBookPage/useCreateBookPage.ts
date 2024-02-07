import { ChangeEvent, FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import { IOnChangeEvent } from "@/shared/models/events/IOnChangeEvent"
import { AlertService } from "@/shared/services/AlertService"
import { BookService } from "@/entities/Book/service/BookService"
import { ICreateBook } from "@/entities/Book/models/requests/CreateBookRequest"
import { FileService } from "@/entities/File/services/FileService"

export const useCreateBookPage = () => {
    const [data, setData] = useState<ICreateBook>({
        name: "",
        description: "",
        imageId: 0,
    })

    const router = useRouter()

    const ChangeCreateBookHandler = ({ name, newValue }: IOnChangeEvent) => {
        setData((prevState) => ({
            ...prevState,
            [name]: newValue,
        }))
    }

    const UploadImageHandler = async (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) {
            return
        }

        const file = e.target.files[0]
        const formData = new FormData()
        formData.append("file", file)

        const uploadImageResult = await FileService.uploadImageAsync(formData)

        if (uploadImageResult.hasError()) {
            return AlertService.errorMessage(uploadImageResult.getError().errorMessage)
        }

        setData((prevState) => ({
            ...prevState,
            imageId: uploadImageResult.unwrap(),
        }))
    }

    const SubmitCreateBookHandler = async (e: FormEvent) => {
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
        SubmitCreateBookHandler,
        ChangeCreateBookHandler,
        UploadImageHandler,
    }
}
