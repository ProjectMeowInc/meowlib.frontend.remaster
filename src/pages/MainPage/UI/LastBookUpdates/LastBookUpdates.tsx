import React from "react"
import classes from "./lastBookUpdates.module.css"
import { BookService } from "@/entities/Book/service/BookService"
import BookPreview from "@/pages/MainPage/UI/BookPreview/BookPreview"

const LastBookUpdates = async () => {
    const getBooksResult = await BookService.getBooks()

    if (getBooksResult.hasError()) {
        return <div>{getBooksResult.getError().errorMessage}</div>
    }

    const books = getBooksResult.unwrap()

    return (
        <div className={classes.container}>
            <div className={classes.block_text}>Последние обновления</div>
            <div className={classes.block_list}>
                {books.length > 0 ? (
                    books.map((book) => <BookPreview key={book.id} id={book.id} image={book.image} name={book.name} />)
                ) : (
                    <h1>Результатов не найдено</h1>
                )}
            </div>
        </div>
    )
}

export default LastBookUpdates
