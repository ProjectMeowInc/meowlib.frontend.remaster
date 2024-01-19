'use client'

import {FC} from "react"
import classes from "./bookImage.module.css"
import Button from "@/shared/UI/button/Button"
import SelectStatusButton from "@/pages/BookPages/BookPage/UI/SelectStatusButton/SelectStatusButton"

interface IBookImageProps {
    bookId: number
    image: string
}

const BookImage: FC<IBookImageProps> = ({ image, bookId }) => {
    return (
        <div className={classes.book_image}>
            <div
                className={classes.background_image}
                style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
            >
                <div
                    className={classes.main_image}
                    style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
                ></div>
            </div>
            <div className={classes.buttons}>
                <Button className={classes.button}>Продолжить читать</Button>
                <SelectStatusButton
                    bookId={bookId}
                />
            </div>
        </div>
    )
}

export default BookImage
