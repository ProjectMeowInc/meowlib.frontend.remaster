import { useEffect, useState } from "react"
import { BookService } from "@/entities/Book/service/BookService"
import { PeopleRoleType } from "@/entities/People/types/PeopleRoleType"
import { AlertService } from "@/shared/services/AlertService"

interface IGetPeople {
    id: number
    name: string
    role: PeopleRoleType
}

export const useUpdateBookPeopleForm = (bookId: number) => {
    const [peopleList, setPeopleList] = useState<IGetPeople[] | null>(null)

    useEffect(() => {
        BookService.getBookById(bookId).then((getPeoplesResult) => {
            if (getPeoplesResult.hasError()) {
                return AlertService.errorMessage(getPeoplesResult.getError().errorMessage)
            }

            setPeopleList(getPeoplesResult.unwrap().peoples)
        })
    }, [])

    return {
        peopleList,
    }
}
