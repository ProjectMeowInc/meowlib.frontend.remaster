import React, {FC} from 'react';
import {BookService} from "@/entities/Book/service/BookService";
import UpdateBookForm from "@/pages/admin/books/UpdateBookPage/UpdateBookForm/UpdateBookForm";

interface IUpdateBookPageProps {
   params: {
       bookId: number
   }
}

const UpdateBookPage: FC<IUpdateBookPageProps> = async ({ params: {bookId} }) => {
    const getBookResult = await BookService.getBookById(bookId)

    if (getBookResult.hasError()) {
        return <div>{getBookResult.getError().errorMessage}</div>
    }

    const book = getBookResult.unwrap()

    return (
        <div>
            <UpdateBookForm book={book}/>
        </div>
    );
};

export default UpdateBookPage;