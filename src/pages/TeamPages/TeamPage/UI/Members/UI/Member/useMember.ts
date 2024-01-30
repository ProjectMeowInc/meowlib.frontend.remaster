import { TeamService } from "@/entities/Team/services/TeamService"
import { AlertService } from "@/shared/services/AlertService"
import { useParams, useRouter } from "next/navigation"

export const useMember = () => {

    const params = useParams<{teamId: string}>()
    const router = useRouter()

    const DeleteHandler = async (userId: number): Promise<void> => {

        if (!params) {
            router.push("/404")
            return
        }

        const deleteResult = await TeamService.removePeopleFromTeamAsync(Number(params.teamId), userId)

        if (deleteResult.hasError()) {
            return AlertService.errorMessage(deleteResult.getError().errorMessage)
        }

        window.location.reload()
    }

    return {
        DeleteHandler
    }
}