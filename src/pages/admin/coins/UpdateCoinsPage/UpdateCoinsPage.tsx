"use client"

import React from "react"
import classes from "./updateCoinsPage.module.css"
import Input from "@/shared/UI/Input/Input"
import Button from "@/shared/UI/button/Button"
import { useUpdateCoinsPage } from "@/pages/admin/coins/UpdateCoinsPage/useUpdateCoinsPage"

const UpdateCoinsPage = () => {
    const { SubmitInfoHandler, ChangeInfoHandler, SubmitIdHandler } = useUpdateCoinsPage()

    return (
        <div className={classes.container}>
            <h1>Изменение количества монет пользователя</h1>
            <form onSubmit={SubmitInfoHandler}>
                <hr />
                <Input
                    name={"userId"}
                    placeholder={"Введите id пользователя"}
                    style={{ width: 95 }}
                    onChange={ChangeInfoHandler}
                />
                <Input
                    name={"updateCoins"}
                    placeholder={"Введите количество монет"}
                    style={{ width: 95 }}
                    onChange={ChangeInfoHandler}
                />
                <Button styles={{ width: "100%" }}>Отправить</Button>
                <hr />
            </form>
            <h1>История изменения монет пользователя</h1>
            <form onSubmit={SubmitIdHandler}>
                <hr />
                <Input
                    name={"userId"}
                    placeholder={"Введите id пользователя"}
                    style={{ width: 95 }}
                    onChange={ChangeInfoHandler}
                />
                <Button styles={{ width: "100%" }}>Отправить</Button>
                <hr />
            </form>
        </div>
    )
}

export default UpdateCoinsPage
