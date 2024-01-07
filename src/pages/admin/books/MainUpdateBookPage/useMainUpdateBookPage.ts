import {useEffect, useState} from "react";
import {BookService} from "@/entities/Book/service/BookService";
import {AlertService} from "@/shared/services/AlertService";
import {PeopleRoleType} from "@/entities/People/types/PeopleRoleType";

interface IGetPeople {
    id: number
    name: string
    role: PeopleRoleType
}

interface IGetTags {
    id: number
    name: string
    description: string
}

export const useMainUpdateBookPage = (bookId: number) => {

    const [peopleList, setPeopleList] = useState<IGetPeople[] | null>(null)
    const [tagList, setTagList] = useState<IGetTags[] | null>(null)

    useEffect(() => {
        BookService.getBookById(bookId).then(getPeoplesResult => {
            if(getPeoplesResult.hasError()) {
                return AlertService.errorMessage(getPeoplesResult.getError().errorMessage)
            }

            setPeopleList(getPeoplesResult.unwrap().peoples)

        })
    }, [])


    useEffect(() => {
        BookService.getBookById(bookId).then(getTagsResult => {
            if(getTagsResult.hasError()) {
                return AlertService.errorMessage(getTagsResult.getError().errorMessage)
            }

            setTagList(getTagsResult.unwrap().tags)
        })
    }, []);

    return {
        peopleList,
        tagList
    }

}