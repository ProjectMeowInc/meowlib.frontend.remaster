import { useEffect, useState } from "react"
import { BookService } from "@/entities/Book/service/BookService"
import { AlertService } from "@/shared/services/AlertService"
import { ITagDTO } from "@/entities/Tag/models/dto/ITagDTO"

export const useUpdateBookTagsForm = (bookId: number) => {
    const [tagList, setTagList] = useState<ITagDTO[] | null>(null)
    const [showTags, setShowTags] = useState<boolean>(false)

    const handleAddTagsClick = () => {
        setShowTags((prevState) => !prevState)
    }

    useEffect(() => {
        BookService.getBookById(bookId).then((getTagsResult) => {
            if (getTagsResult.hasError()) {
                return AlertService.errorMessage(getTagsResult.getError().errorMessage)
            }

            setTagList(getTagsResult.unwrap().tags)
        })
    }, [])

    return {
        tagList,
        showTags,
        handleAddTagsClick,
    }
}