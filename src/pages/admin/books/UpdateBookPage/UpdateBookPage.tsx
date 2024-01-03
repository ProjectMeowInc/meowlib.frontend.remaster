import React, {FC} from 'react';
import {BookService} from "@/entities/Book/service/BookService";
import MainAdminPageListItem from "@/pages/admin/MainAdminPage/UI/MainAdminPageListItem/MainAdminPageListItem";
import classes from './UpdateBookPage.module.css'
import UpdateInfoBookForm from "@/pages/admin/books/UpdateBookPage/UI/UpdateInfoBookForm/UpdateInfoBookForm";

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
        <div className={classes.container}>
            <h1>Обновление книги</h1>
            <MainAdminPageListItem href={`${book.id}/info`}>Информация</MainAdminPageListItem>
            <MainAdminPageListItem href={`${book.id}/pic`}>Изображение</MainAdminPageListItem>
            <MainAdminPageListItem href={`${book.id}/people`}>Люди</MainAdminPageListItem>
            <MainAdminPageListItem href={`${book.id}/tags`}>Теги</MainAdminPageListItem>
            <MainAdminPageListItem href={`${book.id}/trans`}>Переводы</MainAdminPageListItem>
            <UpdateInfoBookForm book={book} styles={{display: 'none'}}/>
        </div>
    );
};

export default UpdateBookPage;