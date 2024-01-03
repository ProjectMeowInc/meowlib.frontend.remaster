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

    return (
        <div className={classes.container}>
            <h1>Обновление книги</h1>
            <MainAdminPageListItem href={`${bookId}/info`}>Информация</MainAdminPageListItem>
            <MainAdminPageListItem href={`${bookId}/pic`}>Изображение</MainAdminPageListItem>
            <MainAdminPageListItem href={`${bookId}/people`}>Люди</MainAdminPageListItem>
            <MainAdminPageListItem href={`${bookId}/tags`}>Теги</MainAdminPageListItem>
            <MainAdminPageListItem href={`${bookId}/trans`}>Переводы</MainAdminPageListItem>
            {/*<UpdateInfoBookForm book={book} styles={{display: 'none'}}/>*/}
        </div>
    );
};

export default UpdateBookPage;