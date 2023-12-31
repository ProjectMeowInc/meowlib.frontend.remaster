import React, {useEffect, useState} from 'react';
import {BookService} from "@/entities/Book/service/BookService";
import {IShortBookDto} from "@/entities/Book/models/dto/ShortBookDto";
import classes from './MainBooksPage.module.css'

const MainBooksPage = () => {

    const [booksList, setBooksList] = useState<IShortBookDto[] | null>(null)

    useEffect(() => {
        BookService.getBooks().then(getBooksResult => {
            if(getBooksResult.hasError()) {
                return <div>{getBooksResult.getError().errorMessage}</div>
            }
            setBooksList(getBooksResult.unwrap())
        })
    })

    return (
        <div className={classes.container}>
            <h2>Список книг</h2>
        </div>
    );
};

export default MainBooksPage;