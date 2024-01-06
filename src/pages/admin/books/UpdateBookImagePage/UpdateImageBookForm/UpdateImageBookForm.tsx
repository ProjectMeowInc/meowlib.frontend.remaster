'use client'

import React, {FC} from 'react';
import Button from "@/shared/UI/button/Button";
import classes from './UpdateImageBookForm.module.css'
import {useUpdateImageBookForm} from "@/pages/admin/books/UpdateBookImagePage/UpdateImageBookForm/useUpdateImageBookForm";

interface IUpdateImageBookFormProps {
    params: {
        bookId: number
    }
}

const UpdateImageBookForm:FC<IUpdateImageBookFormProps> = ( {params: {bookId} }) => {

    const {UpdateImageHandler, SubmitImageHandler} = useUpdateImageBookForm(bookId)

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