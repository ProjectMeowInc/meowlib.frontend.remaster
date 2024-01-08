"use client"

import React, { FC } from "react"
import Input from "@/shared/UI/Input/Input"
import Button from "@/shared/UI/button/Button"
import classes from "./UpdateInfoBookPage.module.css"
import { useUpdateInfoBookPage } from "@/pages/admin/books/UpdateInfoBookPage/useUpdateInfoBookPage"

export interface IUpdateBookPageProps {
    params: {
        bookId: number
    }
}

const UpdateInfoBookPage: FC<IUpdateBookPageProps> = ({ params: { bookId } }) => {
    const { ChangeInfoHandler, SubmitInfoHandler } = useUpdateInfoBookPage(bookId)

    return (
        <div className={classes.container}>
            <form onSubmit={SubmitInfoHandler}>
                <Input
                    name={"name"}
                    placeholder={"Введите название книги"}
                    onChange={ChangeInfoHandler}
                    style={{ margin: 10, width: 95 }}
                />
                <Input
                    name={"description"}
                    placeholder={"Введите описание книги"}
                    onChange={ChangeInfoHandler}
                    style={{ margin: 10, width: 95 }}
                />
                <Button styles={{ width: "100%" }}>Отправить</Button>
            </form>
        </div>
    )
}

export default UpdateInfoBookPage
