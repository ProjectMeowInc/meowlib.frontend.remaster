"use client"

import React, { FC } from "react"
import Button from "@/shared/UI/button/Button"
import classes from "./UpdateImageBookForm.module.css"
import { useUpdateImageBookForm } from "@/pages/admin/books/UpdateImageBookForm/useUpdateImageBookForm"

interface IUpdateImageBookFormProps {
    bookId: number
}

const UpdateImageBookForm: FC<IUpdateImageBookFormProps> = ({ bookId }) => {
    const { UpdateImageHandler, SubmitImageHandler } = useUpdateImageBookForm(bookId)

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
export default UpdateImageBookForm
