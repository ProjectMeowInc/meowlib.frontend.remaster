"use client"

import React, { FC } from "react"
import classes from "./MainUpdateBookPage.module.css"
import UpdateImageBookForm from "@/pages/admin/books/UpdateImageBookForm/UpdateImageBookForm"
import UpdateBookPeopleForm from "@/pages/admin/books/UpdateBookPeopleForm/UpdateBookPeopleForm"
import UpdateInfoBookForm from "@/pages/admin/books/UpdateInfoBookPage/UpdateInfoBookForm"
import UpdateBookTagsForm from "@/pages/admin/books/UpdateBookTagsForm/UpdateBookTagsForm"
import Link from "next/link"
import { useMainUpdateBookPage } from "@/pages/admin/books/MainUpdateBookPage/useMainUpdateBookPage"
import Preloader from "@/pages/admin/UI/Preloader/Preloader"

interface IMainUpdateBookPageProps {
    params: {
        bookId: number
    }
}

const MainUpdateBookPage: FC<IMainUpdateBookPageProps> = ({ params: { bookId } }) => {
    const { peopleList, tagList } = useMainUpdateBookPage(bookId)

    if (!peopleList || !tagList) {
        return <Preloader />
    }

    return (
        <div className={classes.container}>
            <h1>Обновление книги</h1>
            <UpdateInfoBookForm bookId={bookId} />
            <hr />
            <UpdateImageBookForm bookId={bookId} />
            <hr />
            <UpdateBookPeopleForm bookId={bookId} />
            <hr />
            <UpdateBookTagsForm bookId={bookId} />
            <hr />
            <Link href={"/admin/books"}>Сохранить</Link>
        </div>
    )
}

export default MainUpdateBookPage
