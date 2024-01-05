'use client'

import React, {FC} from 'react';
import {BookService} from "@/entities/Book/service/BookService";
import {IUpdateBookInfoPageProps} from "@/pages/admin/books/UpdateBookInfoPage/UpdateBookInfoPage";
import DeleteBookPeopleItem from "@/pages/admin/books/DeleteBookPeople/DeleteBookPeopleItem/DeleteBookPeopleItem";
import {useUpdateBookForm} from "@/pages/admin/books/useUpdateBookForm";

const DeleteBookPeople:FC<IUpdateBookInfoPageProps> = async ({params:{bookId}}) => {

    const { DeletePeopleHandler } = useUpdateBookForm(bookId)

    const getBookResult = await BookService.getBookById(bookId)

    if (getBookResult.hasError()) {
        return <div>{getBookResult.getError().errorMessage}</div>
    }

    const book = getBookResult.unwrap()

    const people = book.peoples

    return (
        <div>
            <h2>Выберите какого человека вы хотите удалить</h2>

            <DeleteBookPeopleItem
                key={people.id}
                id={people.id}
                name={people.name}
                role={people.role}
                onDelete={async (bookId) => {await DeletePeopleHandler(bookId, people.id)}}
            />

        </div>
    );
};

export default DeleteBookPeople;