"use client"

import React, {FC} from 'react';
import Input from "@/shared/UI/Input/Input";
import Button from "@/shared/UI/button/Button";
import classes from './UpdateInfoBookForm.module.css'
import {IBookDto} from "@/entities/Book/models/dto/BookDto";
import {useUpdateBookForm} from "@/pages/admin/books/useUpdateBookForm";

export interface IUpdateBookFormProps {
    book: IBookDto
}


const UpdateInfoBookForm:FC<IUpdateBookFormProps> = ({book}) => {

    const { ChangeInfoHandler, SubmitInfoHandler } = useUpdateBookForm(book.id)

    return (
     <div className={classes.container}>
         <h1>Обновление информации</h1>
       <form onSubmit={SubmitInfoHandler} className={classes.form}>
           <Input name={"name"} placeholder={'Введите название книги'} onChange={ChangeInfoHandler} style={{margin: 10}} />
           <Input name={"description"} placeholder={'Введите описание книги'} onChange={ChangeInfoHandler} style={{margin: 10}} />
           <Button styles={{width: '105%'}}>Отправить</Button>
       </form>
     </div>

    );
};

export default UpdateInfoBookForm;