import { IUpdateBookTagRequest } from "@/entities/Book/models/requests/UpdateBookTagRequest"
import { BookService } from "@/entities/Book/service/BookService"
import { AlertService } from "@/shared/services/AlertService"
import { useState } from "react"
import { useFirstLoadingAsync } from "@/shared/hooks/useFirstLoadingAsync"

interface IGetBookTags {
    id: number
    name: string
    description: string
}

export const useDeleteTagListItem = (bookId: number) => {
    const [tagList, setTagList] = useState<IGetBookTags[] | null>(null)

    useFirstLoadingAsync(async () => {
        const getBookResult = await BookService.getBookById(bookId)
        if (getBookResult.hasError()) {
            return AlertService.errorMessage(getBookResult.getError().errorMessage)
        }

        setTagList(getBookResult.unwrap().tags)
    })

    const RemoveTagHandler = async (bookId: number, updatedTagList: IGetBookTags[]) => {
        const tags: IUpdateBookTagRequest = {
            tags: updatedTagList.map((tag) => tag.id),
        }

        const result = await BookService.updateBookTags(bookId, tags)

        if (result.hasError()) {
            return AlertService.errorMessage(result.getError().errorMessage)
        }

        return AlertService.successMessage("Тег успешно удален")
    }

    return {
        RemoveTagHandler,
        tagList,
    }
}
