import { useState } from "react"
import { ITagDTO } from "@/entities/Tag/models/dto/ITagDTO"
import { TagService } from "@/entities/Tag/services/TagService"
import { AlertService } from "@/shared/services/AlertService"
import { useFirstLoadingAsync } from "@/shared/hooks/useFirstLoadingAsync"

export const useAddBookTagList = () => {
    const [tags, setTags] = useState<ITagDTO[]>()
    const [open, setOpen] = useState<boolean>(true)

    useFirstLoadingAsync(async () => {
        const getTagsResult = await TagService.getAllAsync()
        if (getTagsResult.hasError()) {
            return AlertService.errorMessage(getTagsResult.getError().errorMessage)
        }

        setTags(getTagsResult.unwrap())
    })

    const handleCloseClick = () => {
        setOpen((prevState) => !prevState)
    }

    return {
        tags,
        handleCloseClick,
        open,
    }
}
