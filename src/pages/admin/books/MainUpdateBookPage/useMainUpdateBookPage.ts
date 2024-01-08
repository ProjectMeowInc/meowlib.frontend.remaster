import {useEffect, useState} from "react";
import {BookService} from "@/entities/Book/service/BookService";
import {AlertService} from "@/shared/services/AlertService";
import {IPeopleDto} from "@/entities/People/models/dto/IPeopleDto";
import {ITagDTO} from "@/entities/Tag/models/dto/ITagDTO";

export const useMainUpdateBookPage = (bookId: number) => {

    const [peopleList, setPeopleList] = useState<IPeopleDto[] | null>(null)
    const [tagList, setTagList] = useState<ITagDTO[] | null>(null)

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