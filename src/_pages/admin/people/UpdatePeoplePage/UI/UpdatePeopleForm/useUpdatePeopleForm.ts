import { FormEvent, useState } from "react"
import { IShortPeopleDto } from "@/entities/People/models/dto/IShortPeopleDto"
import { PeopleService } from "@/entities/People/services/PeopleService"
import { AlertService } from "@/shared/services/AlertService"
import { useRouter } from "next/navigation"
import { IOnChangeEvent } from "@/shared/models/events/IOnChangeEvent"

export const useUpdatePeopleForm = (id: number, name: string) => {
    const [requestData, setRequestData] = useState<IShortPeopleDto>({
        name: name,
    })
    const router = useRouter()

    const SubmitHandler = async (e: FormEvent) => {
        e.preventDefault()

        const result = await PeopleService.updateByIdAsync(id, requestData)

        if (result.hasError()) {
            return AlertService.errorMessage(result.getError().errorMessage)
        }

        router.back()
        router.refresh()
    }

    const ChangeHandler = ({ name, newValue }: IOnChangeEvent) => {
        setRequestData((prevState) => ({
            ...prevState,
            [name]: newValue,
        }))
    }

    return {
        ChangeHandler,
        SubmitHandler,
    }
}
