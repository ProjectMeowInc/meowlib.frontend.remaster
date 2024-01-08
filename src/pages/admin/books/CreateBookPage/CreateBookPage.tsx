"use client"

import React from 'react';
import classes from './CreateBookPage.module.css'
import Input from "@/shared/UI/Input/Input";
import Button from "@/shared/UI/button/Button";
import {useCreateForm} from "@/pages/admin/books/CreateBookPage/useCreateForm";


const CreateBookPage = () => {

    const { SubmitCreateBookHandler, ChangeCreateBookHandler } = useCreateForm()

    return (
        <div className={classes.container}>
            <form className={classes.form} onSubmit={SubmitCreateBookHandler}>
                <h1>Создание книги</h1>
                <Input onChange={ChangeCreateBookHandler} name={"name"} placeholder={"Введите название книги"} type={"text"} style={{ width: 95 }}/>

                <Input onChange={ChangeCreateBookHandler} name={"description"} placeholder={"Введите описание книги"} type={"text"} style={{ width: 95 }} />

                <Button styles={{ width: "100%" }}>Создать книгу</Button>
            </form>
        </div>
    );
};

export default CreateBookPage;