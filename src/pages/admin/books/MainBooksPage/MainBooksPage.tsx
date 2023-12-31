"use client"

import React, {useEffect, useState} from 'react';
import {BookService} from "@/entities/Book/service/BookService";
import {IShortBookDto} from "@/entities/Book/models/dto/ShortBookDto";
import classes from './MainBooksPage.module.css'
import BookItem from "@/pages/admin/books/MainBooksPage/UI/BookItem/BookItem";
import AdminCreateButton from "@/pages/admin/UI/AdminCreateButton/AdminCreateButton";
import Preloader from "@/pages/admin/UI/Preloader/Preloader";
import {useMainPageBooks} from "@/pages/admin/books/MainBooksPage/useMainPageBooks";

const MainBooksPage = () => {

    const { DeleteHandler } = useMainPageBooks()

    const [booksList, setBooksList] = useState<IShortBookDto[] | null>(null)

    useEffect(() => {
        BookService.getBooks().then(getBooksResult => {
            if(getBooksResult.hasError()) {
                return <div>{getBooksResult.getError().errorMessage}</div>
            }
            setBooksList(getBooksResult.unwrap())
        })
    }, [])

    if(!booksList) {
        return (
            <Preloader/>
        )
    }

    return (
        <div className={classes.container}>
            <AdminCreateButton text={"Создать книгу"} href={'/new'}/>
            <h2>Список книг</h2>
            {booksList?.length > 0
                ? booksList?.map(book => (
                    <BookItem
                        key={book.id}
                        id={book.id}
                        name={book.name}
                        description={book.description}
                        imageUrl={book.imageUrl}
                        onDelete={async (id) => {await DeleteHandler(id)}}/>
                ))
                : <p>Здесь пока ничего нет</p>
            }

        </div>
    );
};

export default MainBooksPage;