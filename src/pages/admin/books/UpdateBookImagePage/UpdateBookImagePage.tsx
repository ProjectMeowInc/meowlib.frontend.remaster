import React, {FC} from 'react';
import {BookService} from "@/entities/Book/service/BookService";
import UpdateImageBookForm from "@/pages/admin/books/UpdateBookImagePage/UpdateImageBookForm/UpdateImageBookForm";

interface IUpdateBookImagePageProps {
    params: {
        bookId: number
    }
}

const UpdateBookImagePage: FC<IUpdateBookImagePageProps> = async ( {params: {bookId}}) => {


    const getBookResult = await BookService.getBookById(bookId)

    if (getBookResult.hasError()) {
        return <div>{getBookResult.getError().errorMessage}</div>
    }

    const book = getBookResult.unwrap()

    return (
        <div>
            <UpdateImageBookForm book={book}/>
        </div>
    );
};

export default UpdateBookImagePage;