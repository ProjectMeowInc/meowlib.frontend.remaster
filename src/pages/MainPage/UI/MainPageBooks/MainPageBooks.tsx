import React from 'react';
import classes from './MainPageBooks.module.css'
import {BookService} from "@/entities/Book/service/BookService";

const MainPageBooks = async () => {
    const getBooksResult = await BookService.getBooks()

    if (getBooksResult.hasError()) {
        return <div>{getBooksResult.getError().errorMessage}</div>
    }

    const books = getBooksResult.unwrap()

    return (
        <div className={classes.container}>
        </div>
    );
};

export default MainPageBooks;