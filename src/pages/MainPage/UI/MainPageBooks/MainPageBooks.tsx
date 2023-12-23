import React from 'react';
import classes from './MainPageBooks.module.css'
import {BookService} from "@/entities/Book/service/BookService";
import BookPreview from "@/pages/MainPage/UI/BookPreview/BookPreview";

const MainPageBooks = async () => {
    const getBooksResult = await BookService.getBooks()

    if (getBooksResult.hasError()) {
        return <div>{getBooksResult.getError().errorMessage}</div>
    }

    const books = getBooksResult.unwrap()

    return (
        <div className={classes.container}>

            {
                books.length < 0
                    ? <div> <BookPreview/> </div>
                    :  <h1>Результатов не найдено</h1>
            }
        </div>
    );
};

export default MainPageBooks;