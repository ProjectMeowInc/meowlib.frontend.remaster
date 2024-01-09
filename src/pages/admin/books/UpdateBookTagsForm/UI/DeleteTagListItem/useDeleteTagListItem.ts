import { IUpdateBookTagRequest } from "@/entities/Book/models/requests/UpdateBookTagRequest"
import { BookService } from "@/entities/Book/service/BookService"
import { AlertService } from "@/shared/services/AlertService"
import { useEffect, useState } from "react"

interface IGetBookTags {
    id: number
    name: string
    description: string
}

export const useDeleteTagListItem = (bookId: number) => {
    const [tagList, setTagList] = useState<IGetBookTags[] | null>(null)

    useEffect(() => {
        BookService.getBookById(bookId).then((getTagsResult) => {
            if (getTagsResult.hasError()) {
                return AlertService.errorMessage(getTagsResult.getError().errorMessage)
            }

            setTagList(getTagsResult.unwrap().tags)
        })
    }, [])

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
