import { useEffect, useState } from "react"
import { BookService } from "@/entities/Book/service/BookService"
import { PeopleRoleType } from "@/entities/People/types/PeopleRoleType"
import { AlertService } from "@/shared/services/AlertService"
import { useFirstLoadingAsync } from "@/shared/hooks/useFirstLoadingAsync"

interface IGetPeople {
    id: number
    name: string
    role: PeopleRoleType
}

export const useUpdateBookPeopleForm = (bookId: number) => {
    const [peopleList, setPeopleList] = useState<IGetPeople[] | null>(null)

    useFirstLoadingAsync(async () => {
        const getBookResult = await BookService.getBookById(bookId)
        if (getBookResult.hasError()) {
            return AlertService.errorMessage(getBookResult.getError().errorMessage)
        }

        setPeopleList(getBookResult.unwrap().peoples)
    })

    return {
        peopleList,
    }
}
