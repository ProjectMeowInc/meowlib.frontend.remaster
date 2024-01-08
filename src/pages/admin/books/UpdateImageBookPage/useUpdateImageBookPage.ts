import React, { FormEvent, useState } from "react"
import { BookService } from "@/entities/Book/service/BookService"
import { AlertService } from "@/shared/services/AlertService"

export const useUpdateImageBookPage = (bookId: number) => {
    const [image, setImage] = useState<FormData | null>(null)

    function UpdateImageHandler(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.files) {
            const file = event.target.files[0]
            const formData = new FormData()
            formData.append("image", file)
            setImage(formData)
        }
    }

    const SubmitImageHandler = async (e: FormEvent) => {
        e.preventDefault()

        const result = await BookService.uploadImageBook(bookId, image as FormData)

        if (result.hasError()) {
            return AlertService.errorMessage(result.getError().errorMessage)
        }

        return AlertService.successMessage("Изображение успешно обновлено")
    }

    return {
        UpdateImageHandler,
        SubmitImageHandler,
    }
}
