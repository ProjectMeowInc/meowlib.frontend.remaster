import { TeamService } from "@/entities/Team/services/TeamService"
import { AlertService } from "@/shared/services/AlertService"
import { useState } from "react"
import { usePage } from "@/shared/hooks/usePage"

export const useMember = (teamId: number) => {

    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
    const page = usePage()

    const DeleteHandler = async (userId: number): Promise<void> => {

        const deleteResult = await TeamService.removePeopleFromTeamAsync(teamId, userId)

        if (deleteResult.hasError()) {
            return AlertService.errorMessage(deleteResult.getError().errorMessage)
        }

        page.reload()
    }

    return {
        DeleteHandler,
        modalIsOpen,
        setModalIsOpen
    }
}