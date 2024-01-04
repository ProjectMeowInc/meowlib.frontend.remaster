"use client"

import { ITagDTO } from "@/entities/Tag/models/dto/ITagDTO"
import classes from './BookTagList.module.css'
import { FC } from "react"
import { useMainPageTag } from "@/pages/admin/tags/MainTagPage/useMainPageTag"
import PeopleItem from "@/pages/admin/books/UpdatePeopleBookPage/PeopleItem/PeopleItem";
import {IBookDto} from "@/entities/Book/models/dto/BookDto";
import {BookService} from "@/entities/Book/service/BookService";
import {AlertService} from "@/shared/services/AlertService";

interface IBookListProps {
    params: {
        book: IBookDto
    }
    tags: ITagDTO[]
}

const BookTagList: FC<IBookListProps> = ({params:{book}, tags}) => {
    const { DeleteHandler } = useMainPageTag()

    const AddHandler = async (bookId: number, tags: any) => {
        const result = await BookService.updateBookTags(bookId, tags)

        if (result.hasError()) {
            return AlertService.errorMessage(result.getError().errorMessage)
        }
    }

    return (
        <div className={classes.tags}>
            {tags.map((tag) => (
                <PeopleItem
                    key={tag.id}
                    id={tag.id}
                    text={tag.name}
                    onPost={async () => {
                        await AddHandler(book.id, tag.name)
                    }}
                    onDelete={async () => {
                        await DeleteHandler(book.id)
                    }}
                />
            ))}
        </div>
    )
}

export default BookTagList