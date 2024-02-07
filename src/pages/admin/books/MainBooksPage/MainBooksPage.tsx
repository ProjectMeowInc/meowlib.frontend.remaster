"use client"

import React from "react"
import classes from "./MainBooksPage.module.css"
import BookItem from "@/pages/admin/books/MainBooksPage/UI/BookItem/BookItem"
import AdminCreateButton from "@/pages/admin/UI/AdminCreateButton/AdminCreateButton"
import Preloader from "@/pages/admin/UI/Preloader/Preloader"
import { useMainBooksPage } from "@/pages/admin/books/MainBooksPage/useMainBooksPage"

const MainBooksPage = () => {
    const { booksList, DeleteBookHandler } = useMainBooksPage()

    if (!booksList) {
        return <Preloader />
    }

    return (
        <div className={classes.container}>
            <AdminCreateButton text={"Создать книгу"} href={"/new"} />
            <h2>Список книг</h2>
            {booksList?.length > 0 ? (
                booksList?.map((book) => (
                    <BookItem
                        key={book.id}
                        id={book.id}
                        name={book.name}
                        description={book.description}
                        imageUrl={book.image}
                        onDelete={async (id) => await DeleteBookHandler(id)}
                    />
                ))
            ) : (
                <p>Здесь пока ничего нет</p>
            )}
        </div>
    )
}

export default MainBooksPage
