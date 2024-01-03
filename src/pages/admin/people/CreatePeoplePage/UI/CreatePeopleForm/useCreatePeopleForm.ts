import { FormEvent, useState } from "react"
import { IShortPeopleDto } from "@/entities/People/models/dto/IShortPeopleDto"
import { IOnChangeEvent } from "@/shared/models/events/IOnChangeEvent"
import { PeopleService } from "@/entities/People/services/PeopleService"
import { AlertService } from "@/shared/services/AlertService"
import { useRouter } from "next/navigation"

export const useCreatePeopleForm = () => {
    const [requestData, setRequestData] = useState<IShortPeopleDto>({
        name: ""
    })
    const router = useRouter()

    const ChangeHandler = ({name, newValue}: IOnChangeEvent) => {
        setRequestData(prevState => ({
            ...prevState,
            [name]: newValue
        }))
    }

    const SubmitHandler = async (e: FormEvent) => {
        e.preventDefault()

        const result = await PeopleService.createAsync(requestData)

        if (result.hasError()) {
            return AlertService.errorMessage(result.getError().errorMessage)
        }

        router.back()
        router.refresh()
    }

    return {
        SubmitHandler,
        ChangeHandler
    }
}