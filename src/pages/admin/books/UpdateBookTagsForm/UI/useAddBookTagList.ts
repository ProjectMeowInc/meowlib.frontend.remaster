import { useEffect, useState } from "react"
import { ITagDTO } from "@/entities/Tag/models/dto/ITagDTO"
import { TagService } from "@/entities/Tag/services/TagService"
import { AlertService } from "@/shared/services/AlertService"

export const useAddBookTagList = () => {
    const [tags, setTags] = useState<ITagDTO[]>()

    const [open, setOpen] = useState<boolean>(true)

    useEffect(() => {
        TagService.getAllAsync().then((result) => {
            if (result.hasError()) {
                return AlertService.errorMessage(result.getError().errorMessage)
            }

            setTags(result.unwrap())
        })
    }, [])

    const handleCloseClick = () => {
        setOpen((prevState) => !prevState)
    }

    return {
        tags,
        handleCloseClick,
        open,
    }
}
