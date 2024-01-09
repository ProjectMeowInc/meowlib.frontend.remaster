import { useEffect, useState } from "react"
import { BookService } from "@/entities/Book/service/BookService"
import { AlertService } from "@/shared/services/AlertService"
import { IPeopleDto } from "@/entities/People/models/dto/IPeopleDto"
import { ITagDTO } from "@/entities/Tag/models/dto/ITagDTO"
import { useFirstLoadingAsync } from "@/shared/hooks/useFirstLoadingAsync"

export const useMainUpdateBookPage = (bookId: number) => {
    const [peopleList, setPeopleList] = useState<IPeopleDto[] | null>(null)
    const [tagList, setTagList] = useState<ITagDTO[] | null>(null)

    useFirstLoadingAsync(async () => {
        const getBookResult = await BookService.getBookById(bookId)

        if (getBookResult.hasError()) {
            return AlertService.errorMessage(getBookResult.getError().errorMessage)
        }

        const book = getBookResult.unwrap()
        setPeopleList(book.peoples)
        setTagList(book.tags)
    })

    return {
        peopleList,
        tagList,
    }
}
