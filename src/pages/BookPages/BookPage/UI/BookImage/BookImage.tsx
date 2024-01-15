"use client"

import { FC, useState } from "react"
import classes from "./bookImage.module.css"
import Button from "@/shared/UI/button/Button"
import SelectStatusButton from "@/pages/BookPages/BookPage/UI/SelectStatusButton/SelectStatusButton"
import { UserBookStatus } from "@/entities/UserFavorite/UserBookStatuses"

interface IBookImageProps {
    bookId: number
    image: string
}

const BookImage: FC<IBookImageProps> = ({ image, bookId }) => {
    const [selectedStatus, setSelectedStatus] = useState<UserBookStatus | null>(null)

    return (
        <div className={"null"}>
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
                <Button className={classes.button}>Добавить в список</Button>
                <SelectStatusButton
                    bookId={bookId}
                    selectedStatus={selectedStatus}
                    onStatusChanged={(newStatus) => setSelectedStatus(newStatus)}
                />
            </div>
        </div>
    )
}

export default BookImage
