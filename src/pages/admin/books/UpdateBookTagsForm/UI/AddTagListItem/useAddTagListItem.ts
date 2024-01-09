import { BookService } from "@/entities/Book/service/BookService"
import { AlertService } from "@/shared/services/AlertService"
import { IUpdateBookTagRequest } from "@/entities/Book/models/requests/UpdateBookTagRequest"
import { useEffect, useState } from "react"
import { ITagDTO } from "@/entities/Tag/models/dto/ITagDTO"

export const useAddTagListItem = (bookId: number, id: number, name: string, description: string) => {
    const [tagList, setTagList] = useState<ITagDTO[] | null>(null)

    useEffect(() => {
        BookService.getBookById(bookId).then((getTagsResult) => {
            if (getTagsResult.hasError()) {
                return AlertService.errorMessage(getTagsResult.getError().errorMessage)
            }

            setTagList(getTagsResult.unwrap().tags)
        })
    }, [])

    const AddTagHandler = async (bookId: number, tags: IUpdateBookTagRequest) => {
        const result = await BookService.updateBookTags(bookId, tags)

        if (result.hasError()) {
            return AlertService.errorMessage(result.getError().errorMessage)
        }

        return AlertService.successMessage("Тег успешно добавлен")
    }

    const handleAddTag = async () => {
        if (!tagList) {
            return
        }

        tagList.push({ id, name, description })

        const tags: IUpdateBookTagRequest = {
            tags: tagList.map((tag) => tag.id),
        }

        await AddTagHandler(bookId, tags)
    }

    return {
        handleAddTag,
        AddTagHandler,
    }
}
