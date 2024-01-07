'use client'

import React, {FC} from 'react';
import classes from './MainUpdateBookPage.module.css'
import UpdateImageBookForm from "@/pages/admin/books/UpdateImageBookForm/UpdateImageBookForm";
import UpdateBookPeople from "@/pages/admin/books/UpdateBookPeople/UpdateBookPeople";
import UpdateInfoBookForm from "@/pages/admin/books/UpdateInfoBookForm/UpdateInfoBookForm";
import UpdateBookTags from "@/pages/admin/books/UpdateBookTags/UpdateBookTags";
import Link from "next/link";
import {useMainUpdateBookPage} from "@/pages/admin/books/MainUpdateBookPage/useMainUpdateBookPage";
import Preloader from "@/pages/admin/UI/Preloader/Preloader";

interface IUpdateBookPageProps {
   params: {
       bookId: number
   }
}

const MainUpdateBookPage: FC<IUpdateBookPageProps> = ({ params: {bookId} }) => {

    const { peopleList, tagList } = useMainUpdateBookPage(bookId)

    if (!peopleList || !tagList) {
        return <Preloader/>
    }

    return (
        <div className={classes.container}>
            <h1>Обновление книги</h1>
             <UpdateInfoBookForm params={{bookId}}/>
            <hr/>
             <UpdateImageBookForm params={{bookId}}/>
            <hr/>
             <UpdateBookPeople params={{bookId}}/>
            <hr/>
             <UpdateBookTags params={{bookId}}/>
            <hr/>
            <Link href={'/admin/books'}>Сохранить</Link>
        </div>
    );
};

export default MainUpdateBookPage;