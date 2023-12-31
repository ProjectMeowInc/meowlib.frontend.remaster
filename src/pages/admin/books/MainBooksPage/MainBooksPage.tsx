import React, {useEffect, useState} from 'react';
import {BookService} from "@/entities/Book/service/BookService";
import {IShortBookDto} from "@/entities/Book/models/dto/ShortBookDto";
import classes from './MainBooksPage.module.css'
import BookItem from "@/pages/admin/books/MainBooksPage/UI/BookItem/BookItem";

const MainBooksPage = () => {

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
            <p>Загрузка</p>
        )
    }

    return (
        <div className={classes.container}>
            <h2>Список книг</h2>
            {booksList?.length > 0
                ? booksList?.map(book => (
                    <BookItem key={book.id} id={book.id} name={book.name} description={book.description} imageUrl={book.imageUrl}/>
                ))
                :<p>Здесь пока ничего нет</p>
            }
        </div>
    );
};

export default MainBooksPage;