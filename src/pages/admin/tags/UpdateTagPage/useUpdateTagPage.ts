import { FormEvent, useState } from "react"
import { IUpdateTagDTO } from "@/entities/Tag/models/dto/IUpdateTagDTO"
import { IOnChangeEvent } from "@/shared/models/events/IOnChangeEvent"
import { TagService } from "@/entities/Tag/services/TagService"
import { AlertService } from "@/shared/services/AlertService"
import { useRouter } from "next/navigation"

export const useUpdateTagPage = (tagId: number) => {
    const [data, setData] = useState<IUpdateTagDTO>({
        name: "",
        description: ""
    })
    const router = useRouter()

    const ChangeHandler = ({name, newValue}: IOnChangeEvent) => {
        setData(prevState => ({
            ...prevState,
            [name]: newValue
        }))
    }

    const SubmitHandler = async (e: FormEvent) => {
        e.preventDefault()

        const result = await TagService.updateByIdAsync(tagId, data)

        if (result.hasError()) {
            return AlertService.errorMessage(result.getError().errorMessage)
        }

        router.back()
    }

    return {
        ChangeHandler,
        SubmitHandler
    }
}