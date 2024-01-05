import React, {FC} from 'react';
import MainAdminPageListItem from "@/pages/admin/MainAdminPage/UI/MainAdminPageListItem/MainAdminPageListItem";
import classes from './MainUpdateBookPage.module.css'

interface IUpdateBookPageProps {
   params: {
       bookId: number
   }
}

const MainUpdateBookPage: FC<IUpdateBookPageProps> = async ({ params: {bookId} }) => {

    return (
        <div className={classes.container}>
            <h1>Обновление книги</h1>
           <div className={classes.items}>
            <MainAdminPageListItem href={`${bookId}/info`}>Информация</MainAdminPageListItem>
            <MainAdminPageListItem href={`${bookId}/image`}>Изображение</MainAdminPageListItem>
            <MainAdminPageListItem href={`${bookId}/add-people`}>Люди Добавить</MainAdminPageListItem>
            <MainAdminPageListItem href={`${bookId}/delete-people`}>Люди Удалить</MainAdminPageListItem>
            <MainAdminPageListItem href={`${bookId}/tags`}>Теги</MainAdminPageListItem>
            <MainAdminPageListItem href={`${bookId}/trans`}>Переводы</MainAdminPageListItem>
           </div>
        </div>
    );
};

export default MainUpdateBookPage;