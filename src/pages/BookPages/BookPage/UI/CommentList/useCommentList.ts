import { useState } from "react"
import { ICommentDto } from "@/entities/BookComments/models/dto/ICommentDto"
import { LogService } from "@/shared/services/LogService"
import { useFirstLoadingAsync } from "@/shared/hooks/useFirstLoadingAsync"

export const useCommentList = () => {
    const [comments] = useState<ICommentDto[] | null>(null)

    useFirstLoadingAsync(async () => {
        await updateCommentsAsync()
        LogService.info("Коментарии обновленны", "useCommentList")
    })

    const updateCommentsAsync = async () => {}

    return {
        comments,
    }
}
