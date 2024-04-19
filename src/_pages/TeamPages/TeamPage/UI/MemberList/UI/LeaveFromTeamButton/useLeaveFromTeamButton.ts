import { TeamService } from "@/entities/Team/services/TeamService"
import { useParams } from "next/navigation"
import { AlertService } from "@/shared/services/AlertService"
import { usePage } from "@/shared/hooks/usePage"

export const useLeaveFromTeamButton = () => {

    const params = useParams<{teamId: string}>()
    const page = usePage()

    const LeaveFromTeam = async () => {

        if (!params) {
            throw new Error("Невозможная ошибка")
        }

        const result = await TeamService.leaveTeamAsync(Number(params.teamId))

        if (result.hasError()) {
            return AlertService.errorMessage(result.getError().errorMessage)
        }

        page.reload()
    }

    return {
        LeaveFromTeam
    }
}