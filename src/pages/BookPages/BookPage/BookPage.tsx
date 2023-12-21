import { FC } from "react"
import BookImage from "@/pages/BookPages/BookPage/UI/BookImage/BookImage"
import BookMainInfo from "@/pages/BookPages/BookPage/UI/BookMainInfo/BookMainInfo"
import classes from "./bookPage.module.css"
import {BookService} from "@/entities/Book/service/BookService";

interface IBookPageProps {
    params: {
        bookId: number
    }
}

const BookPage: FC<IBookPageProps> = async ({params}) => {

    const result = await BookService.getBookByIdAsync(params.bookId)
    if (result.hasError()) {
        return <div>Ошибка загрузки книги: {result.getError().errorMessage}</div>
    }

    const data = result.unwrap();

    return (
        <div className={classes.page}>
            <BookImage
                image={data.imageUrl}
            />
            <BookMainInfo {...data}/>
        </div>
    )
}

export default BookPage
