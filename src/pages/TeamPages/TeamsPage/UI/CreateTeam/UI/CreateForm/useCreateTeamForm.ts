import { FormEvent, useState } from "react"
import { ICreateTeam } from "@/entities/Team/models/dto/CreateTeam"
import { IOnChangeEvent } from "@/shared/models/events/IOnChangeEvent"
import { TeamService } from "@/entities/Team/services/TeamService"
import { AlertService } from "@/shared/services/AlertService"

export const useCreateTeamForm = () => {

    const [requestData, setRequestData] = useState<ICreateTeam>({
        name: "",
        description: ""
    })

    const ChangeHandler = ({name, newValue}: IOnChangeEvent) => {
        setRequestData(prevState => ({
            ...prevState,
            [name]: newValue
        }))
    }

    const SubmitHandler = async (e: FormEvent) => {

        e.preventDefault()

        const result = await TeamService.createTeamAsync(requestData)

        if (result.hasError()) {
            return AlertService.errorMessage(result.getError().errorMessage)
        }

        AlertService.successMessage("Команда успешно создана")
        window.location.reload()
    }

    return {
        ChangeHandler,
        SubmitHandler
    }
}