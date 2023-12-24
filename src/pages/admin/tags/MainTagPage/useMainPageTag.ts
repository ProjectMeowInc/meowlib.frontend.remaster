import { useRouter } from "next/navigation"
import { TagService } from "@/entities/Tag/services/TagService"
import { AlertService } from "@/shared/services/AlertService"

export const useMainPageTag = () => {
    const router = useRouter()

    const DeleteHandler = async (tagId: number) => {
        const result = await TagService.deleteAsync(tagId)

        if (result.hasError()) {
            return AlertService.errorMessage(result.getError().errorMessage)
        }

        router.refresh()
    }

    return {
        DeleteHandler
    }
}