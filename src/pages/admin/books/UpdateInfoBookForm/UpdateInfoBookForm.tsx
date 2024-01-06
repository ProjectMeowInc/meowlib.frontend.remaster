"use client"

import React, {FC} from 'react';
import Input from "@/shared/UI/Input/Input";
import Button from "@/shared/UI/button/Button";
import classes from './UpdateInfoBookForm.module.css'
import {useUpdateInfoBookForm} from "@/pages/admin/books/UpdateInfoBookForm/useUpdateInfoBookForm";

export interface IUpdateBookFormProps {
    params: {
        bookId: number
    }
}


const UpdateInfoBookForm:FC<IUpdateBookFormProps> = ({ params: {bookId} }) => {

    const { ChangeInfoHandler, SubmitInfoHandler } = useUpdateInfoBookForm(bookId)

    return (
     <div className={classes.container}>
       <form onSubmit={SubmitInfoHandler}>
           <Input name={"name"} placeholder={'Введите название книги'} onChange={ChangeInfoHandler} style={{margin: 10}} />
           <Input name={"description"} placeholder={'Введите описание книги'} onChange={ChangeInfoHandler} style={{margin: 10}} />
           <Button styles={{width: '105%'}}>Отправить</Button>
       </form>
     </div>

    );
};

export default UpdateInfoBookForm;