import React, {FormEvent, useState} from "react";
import {BookService} from "@/entities/Book/service/BookService";
import {AlertService} from "@/shared/services/AlertService";
import {useRouter} from "next/navigation";

export const useUpdateImageBookForm = (bookId: number) => {

    const [image, setImage] = useState<FormData | null>(null)

    function UpdateImageHandler(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.files) {
            const file = event.target.files[0]
            const formData = new FormData()
            formData.append('image', file)
            setImage(formData)
        }
    }

    const router = useRouter()

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

    return {
        UpdateImageHandler,
        SubmitImageHandler
    }
}