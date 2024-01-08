"use client"

import React, { FC } from "react"
import Button from "@/shared/UI/button/Button"
import classes from "./UpdateImageBookPage.module.css"
import { useUpdateImageBookPage } from "@/pages/admin/books/UpdateImageBookPage/useUpdateImageBookPage"

interface IUpdateImageBookPageProps {
    params: {
        bookId: number
    }
}

const UpdateImageBookPage: FC<IUpdateImageBookPageProps> = ({ params: { bookId } }) => {
    const { UpdateImageHandler, SubmitImageHandler } = useUpdateImageBookPage(bookId)

    return (
        <div className={classes.container}>
            <h1>Загрузка изображения</h1>
            <form onSubmit={SubmitImageHandler}>
                <input type={"file"} onChange={UpdateImageHandler} />
                <Button styles={{ margin: "15px" }}>Отправить</Button>
            </form>
        </div>
    )
}
export default UpdateImageBookPage
