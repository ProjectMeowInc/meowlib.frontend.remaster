'use client'

import React, {FC} from 'react';
import {IBookDto} from "@/entities/Book/models/dto/BookDto";
import Button from "@/shared/UI/button/Button";
import classes from './UpdateImageBookForm.module.css'
import {useUpdateImageBookForm} from "@/pages/admin/books/UpdateBookImagePage/UpdateImageBookForm/useUpdateImageBookForm";

interface IUpdateImageBookFormProps {
    book: IBookDto
}

const UpdateImageBookForm:FC<IUpdateImageBookFormProps> = ({book}) => {

    const {UpdateImageHandler, SubmitImageHandler} = useUpdateImageBookForm(book.id)

    return (
      <div className={classes.container}>
          <h1>Обновление изображения</h1>
            <form onSubmit={SubmitImageHandler}>
                <input type={"file"} onChange={UpdateImageHandler}/>
                <Button>Отправить</Button>
            </form>
      </div>
    )
}
export default UpdateImageBookForm;