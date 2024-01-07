import {useEffect, useState} from "react";
import {BookService} from "@/entities/Book/service/BookService";
import {AlertService} from "@/shared/services/AlertService";

interface IGetTags {
    id: number
    name: string
    description: string
}

export const useUpdateBookTags = (bookId: number) => {

    const [tagList, setTagList] = useState<IGetTags[] | null>(null)

    useEffect(() => {
        BookService.getBookById(bookId).then(getTagsResult => {
            if(getTagsResult.hasError()) {
                return AlertService.errorMessage(getTagsResult.getError().errorMessage)
            }

            setTagList(getTagsResult.unwrap().tags)
        })
    }, []);

    return {
        tagList,
    }
}
