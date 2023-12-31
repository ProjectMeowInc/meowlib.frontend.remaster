"use client"

import React from 'react';
import classes from './CreateBookPage.module.css'
import Input from "@/shared/UI/Input/Input";
import Button from "@/shared/UI/button/Button";
import {useCreateForm} from "@/pages/admin/books/CreateBookPage/useCreateForm";


const CreateBookPage = () => {

    const { SubmitHandler, ChangeHandler } = useCreateForm()

    return (
        <div className={classes.container}>
            <form className={classes.form} onSubmit={SubmitHandler}>
                <h1>Создание книги</h1>
                <Input onChange={ChangeHandler} name={"name"} placeholder={"Введите название книги"} type={"text"} />

                <Input onChange={ChangeHandler} name={"description"} placeholder={"Введите описание книги"} type={"text"} />

                <Button styles={{ width: "105%" }}>Создать книгу</Button>
            </form>
        </div>
    );
};

export default CreateBookPage;