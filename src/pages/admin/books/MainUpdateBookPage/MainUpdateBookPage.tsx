"use client"

import React, { FC } from "react"
import classes from "./MainUpdateBookPage.module.css"
import UpdateImageBookPage from "@/pages/admin/books/UpdateImageBookPage/UpdateImageBookPage"
import UpdateBookPeople from "@/pages/admin/books/UpdateBookPeoplePage/UpdateBookPeoplePage"
import UpdateInfoBookPage from "@/pages/admin/books/UpdateInfoBookPage/UpdateInfoBookPage"
import UpdateBookTagsPage from "@/pages/admin/books/UpdateBookTagsPage/UpdateBookTagsPage"
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
            <UpdateInfoBookPage params={{ bookId }} />
            <hr />
            <UpdateImageBookPage params={{ bookId }} />
            <hr />
            <UpdateBookPeople params={{ bookId }} />
            <hr />
            <UpdateBookTagsPage params={{ bookId }} />
            <hr />
            <Link href={"/admin/books"}>Сохранить</Link>
        </div>
    )
}

export default MainUpdateBookPage
