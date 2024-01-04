'use client'

import React, {FC} from 'react';
import {IBookDto} from "@/entities/Book/models/dto/BookDto";
import {useUpdateBookForm} from "@/pages/admin/books/useUpdateBookForm";
import Button from "@/shared/UI/button/Button";
import classes from './UpdateImageBookForm.module.css'

interface IUpdateImageBookFormProps {
    book: IBookDto
}

const UpdateImageBookForm:FC<IUpdateImageBookFormProps> = ({book}) => {

    const {UpdateImageHandler, SubmitImageHandler} = useUpdateBookForm(book.id)



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