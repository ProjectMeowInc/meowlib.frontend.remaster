import React, {useEffect, useState} from 'react';
import classes from './MainPageBooks.module.css'
import {BookGetResponseDTO} from "@/entities/Book/model/dto/BookGetResponseDTO";
import {BookService} from "@/entities/Book/service/BookService";

const MainPageBooks = () => {
        const [books, setBooks] = useState<BookGetResponseDTO[] | null>(null)

        useEffect(() => {
            BookService.getBooks().then(result => {
                if (result.hasError()) {
                    return
                }

                const books = result.unwrap()

                return setBooks(books)
            })
        }, [])


    return (
        <div className={classes.container}>
        </div>
    );
};

export default MainPageBooks;