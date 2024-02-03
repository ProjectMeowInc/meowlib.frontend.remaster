import { TeamService } from "@/entities/Team/services/TeamService"
import { AlertService } from "@/shared/services/AlertService"
import { useParams } from "next/navigation"

export const useUserItem = () => {

    const params = useParams<{teamId: string}>()

    const InviteUser = async (userId: number) => {
        if (!params) {
            return
        }

        const inviteUserResult = await TeamService.invitePeopleToTeamAsync(Number(params.teamId), userId)

        if (inviteUserResult.hasError()) {
            return AlertService.errorMessage(inviteUserResult.getError().errorMessage)
        }
    }

    return {
        InviteUser
    }
}