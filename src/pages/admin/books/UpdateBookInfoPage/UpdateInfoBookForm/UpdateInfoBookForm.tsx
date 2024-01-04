"use client"

import React, {FC} from 'react';
import Input from "@/shared/UI/Input/Input";
import Button from "@/shared/UI/button/Button";
import {IBookDto} from "@/entities/Book/models/dto/BookDto";
import {useUpdateBookForm} from "@/pages/admin/books/useUpdateBookForm";

export interface IUpdateBookFormProps {
    book: IBookDto
}


const UpdateInfoBookForm:FC<IUpdateBookFormProps> = ({book}) => {

    const { ChangeInfoHandler, SubmitInfoHandler } = useUpdateBookForm(book.id)

    return (
       <form onSubmit={SubmitInfoHandler}>
           <Input name={"name"} placeholder={'Введите название книги'} onChange={ChangeInfoHandler} />
           <Input name={"description"} placeholder={'Введите описание книги'} onChange={ChangeInfoHandler} />
           <Button>Отправить</Button>
       </form>

    );
};

export default UpdateInfoBookForm;