import React, {FC} from 'react';
import Input from "@/shared/UI/Input/Input";
import Button from "@/shared/UI/button/Button";
import {IBookDto} from "@/entities/Book/models/dto/BookDto";
import {useUpdateBookForm} from "@/pages/admin/books/UpdateBookPage/UI/useUpdateBookForm";

interface IUpdateBookFormProps {
    book: IBookDto
    styles? : {
        display: string
    }
}


const UpdateInfoBookForm:FC<IUpdateBookFormProps> = ({book, styles}) => {

    const { ChangeInfoHandler, SubmitInfoHandler } = useUpdateBookForm(book.id)

    return (
       <form onSubmit={SubmitInfoHandler} style={styles}>
           <Input name={"name"} placeholder={'Введите название книги'} onChange={ChangeInfoHandler} />
           <Input name={"description"} placeholder={'Введите описание книги'} onChange={ChangeInfoHandler} />
           <Button>Отправить</Button>
       </form>

    );
};

export default UpdateInfoBookForm;