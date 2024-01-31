import { TeamService } from "@/entities/Team/services/TeamService"
import { useParams } from "next/navigation"
import { AlertService } from "@/shared/services/AlertService"

export const useLeaveFromTeam = () => {

    const params = useParams<{teamId: string}>()

    const LeaveFromTeam = async () => {

        if (!params) {
            return
        }

        const result = await TeamService.leaveTeamAsync(Number(params.teamId))

        if (result.hasError()) {
            return AlertService.errorMessage(result.getError().errorMessage)
        }

        window.location.reload()
    }

    return {
        LeaveFromTeam
    }
}