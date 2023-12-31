'use client'

import Input from "@/shared/UI/Input/Input";
import Button from "@/shared/UI/button/Button";
import {useUpdateBookForm} from "@/pages/admin/books/UpdateBookPage/UpdateBookForm/useUpdateBookForm";
import {IBookDto} from "@/entities/Book/models/dto/BookDto";
import classes from "./UpdateBookForm.module.css";
import {FC} from "react";

interface IUpdateBookFormProps {
    book: IBookDto
}

const UpdateBookForm:FC<IUpdateBookFormProps> = ({ book }) => {

    const { ChangeHandler, SubmitHandler } = useUpdateBookForm(book.id)

    return (
      <div className={classes.container}>
        <form className={classes.form} onSubmit={SubmitHandler}>
            <h1>Обновление книги</h1>
            <Input name={"name"} placeholder={'Введите название книги'} onChange={ChangeHandler} />
            <Input name={"description"} placeholder={'Введите описание книги'} onChange={ChangeHandler} />
            <Input name={'imageUrl'} placeholder={'Изображение'} onChange={ChangeHandler} />
            <Input name={'author'} placeholder={'Введите автора книги'} onChange={ChangeHandler} />
            <Input name={'tags'} placeholder={'Введите теги книги'} onChange={ChangeHandler} />
            <Input name={'translations'} placeholder={'Перевод'} onChange={ChangeHandler} />
            <Button>Отправить</Button>
        </form>
      </div>
    )
}
export default UpdateBookForm;