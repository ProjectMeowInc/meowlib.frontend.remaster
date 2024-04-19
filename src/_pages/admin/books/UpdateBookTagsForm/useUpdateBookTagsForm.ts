import { useState } from "react"
import { BookService } from "@/entities/Book/service/BookService"
import { AlertService } from "@/shared/services/AlertService"
import { ITagDTO } from "@/entities/Tag/models/dto/ITagDTO"
import { useFirstLoadingAsync } from "@/shared/hooks/useFirstLoadingAsync"

export const useUpdateBookTagsForm = (bookId: number) => {
    const [tagList, setTagList] = useState<ITagDTO[] | null>(null)
    const [showTags, setShowTags] = useState<boolean>(false)

    const handleAddTagsClick = () => {
        setShowTags((prevState) => !prevState)
    }

    useFirstLoadingAsync(async () => {
        const getBookResult = await BookService.getBookById(bookId)
        if (getBookResult.hasError()) {
            return AlertService.errorMessage(getBookResult.getError().errorMessage)
        }

        setTagList(getBookResult.unwrap().tags)
    })

    return {
        tagList,
        showTags,
        handleAddTagsClick,
    }
}
