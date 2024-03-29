import React, { FC } from "react"
import classes from "./BookItem.module.css"
import Link from "next/link"
import { usePathname } from "next/navigation"
import BookPreview from "@/pages/MainPage/UI/BookPreview/BookPreview"

interface IBookItemProps {
    id: number
    name: string
    description: string
    imageUrl: string
    onDelete: (id: number) => Promise<void>
}

const BookItem: FC<IBookItemProps> = ({ id, name, description, imageUrl, onDelete }) => {
    const pathname = usePathname()

    return (
        <div className={classes.container}>
            <BookPreview id={id} image={imageUrl} name={name} />
            <h4>Описание:</h4>
            <p>{description}</p>
            <div className={classes.btns}>
                <Link href={`${pathname}/${id}`} className={classes.link_text}>
                    Изменить
                </Link>
                <p onClick={async () => await onDelete(id)} className={classes.delete_btn}>
                    Удалить
                </p>
            </div>
        </div>
    )
}

export default BookItem
