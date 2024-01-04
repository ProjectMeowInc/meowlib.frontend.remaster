import { BookService } from "@/entities/Book/service/BookService"
import React, { FC } from "react"
import UpdateInfoBookForm from "@/pages/admin/books/UpdateBookInfoPage/UpdateInfoBookForm/UpdateInfoBookForm"

export interface IUpdateBookInfoPageProps {
    params: {
        bookId: number
    }
}

const UpdateBookInfoPage: FC<IUpdateBookInfoPageProps> = async ({params: {bookId}}) => {

     const getBookResult = await BookService.getBookById(bookId)

    if (getBookResult.hasError()) {
        return <div>{getBookResult.getError().errorMessage}</div>
    }

     const book = getBookResult.unwrap()

    return (
        <div>
            <UpdateInfoBookForm book={book}/>
        </div>
    )
}

export default UpdateBookInfoPage