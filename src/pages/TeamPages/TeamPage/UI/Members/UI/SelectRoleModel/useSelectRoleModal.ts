import { TeamRoleType } from "@/entities/Team/types/TeamRoleType"
import { useState } from "react"
import { TeamService } from "@/entities/Team/services/TeamService"
import { useParams, useRouter } from "next/navigation"
import { AlertService } from "@/shared/services/AlertService"

export const useSelectRoleModal = (role: TeamRoleType, closeModalFunc: () => void) => {

    const [requestData, setRequestData] = useState<TeamRoleType>(role)
    const params = useParams<{teamId: string}>()
    const router = useRouter()

    const SubmitHandler = async (userId: number) => {
        if (!params) {
            router.push("/404")
            return
        }

        const result = await TeamService.updateTeamRoleAsync(Number(params.teamId), userId, requestData)

        if (result.hasError()) {
            return AlertService.errorMessage(result.getError().errorMessage)
        }

        closeModalFunc.call(null)
        router.refresh()
    }

    return {
        SubmitHandler,
        setRequestData
    }
}