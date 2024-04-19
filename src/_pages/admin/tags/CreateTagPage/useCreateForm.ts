import { FormEvent, useState } from "react"
import { IOnChangeEvent } from "@/shared/models/events/IOnChangeEvent"
import { ICreateTagDTO } from "@/entities/Tag/models/dto/ICreateTagDTO"
import { useRouter } from "next/navigation"
import { TagService } from "@/entities/Tag/services/TagService"
import { AlertService } from "@/shared/services/AlertService"

export const useCreateForm = () => {
    const [data, setData] = useState<ICreateTagDTO>({
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

        const result = await TagService.createAsync(data)

        if (result.hasError()) {
            return AlertService.errorMessage(result.getError().errorMessage)
        }

        router.back()
        router.refresh()
        return AlertService.successMessage("Тег успешно создан")
    }

    return {
        SubmitHandler,
        ChangeHandler,
    }
}
