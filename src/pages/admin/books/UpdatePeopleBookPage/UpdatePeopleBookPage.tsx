import React, {FC} from 'react';
import {IUpdateBookInfoPageProps} from "@/pages/admin/books/UpdateBookInfoPage/UpdateBookInfoPage";
import {BookService} from "@/entities/Book/service/BookService";
import UpdatePeopleBookForm from "@/pages/admin/books/UpdatePeopleBookPage/UpdatePeopleBookForm/UpdatePeopleBookForm";

const UpdatePeopleBookPage:FC<IUpdateBookInfoPageProps> = async ({params: {bookId}}) => {

    const getBookResult = await BookService.getBookById(bookId)

    if (getBookResult.hasError()) {
        return <div>{getBookResult.getError().errorMessage}</div>
    }

    const book = getBookResult.unwrap()

    return (
        <div>
            <UpdatePeopleBookForm book={book}/>
        </div>
    );
};

export default UpdatePeopleBookPage;