'use client'

import React, {FC} from 'react';
import {usePeopleMainPage} from "@/pages/admin/people/PeopleMainPage/usePeopleMainPage";
import classes from "@/pages/admin/people/PeopleMainPage/peopleMainPage.module.css";
import Preloader from "@/pages/admin/UI/Preloader/Preloader";
import {useUpdateBookForm} from "@/pages/admin/books/useUpdateBookForm";
import {IUpdateBookFormProps} from "@/pages/admin/books/UpdateBookInfoPage/UpdateInfoBookForm/UpdateInfoBookForm";
import PeopleItem from "@/pages/admin/books/UpdatePeopleBookPage/PeopleItem/PeopleItem";
import {BookService} from "@/entities/Book/service/BookService";
import {AlertService} from "@/shared/services/AlertService";

const UpdatePeopleBookForm:FC<IUpdateBookFormProps> = ({book}) => {

    const { people, ChangePage } = usePeopleMainPage()
    const { DeleteHandler } = useUpdateBookForm(book.id)


    if (!people) {
        return <Preloader/>
    }

    const AddHandler = async (bookId: number, people: any) => {
        const result = await BookService.addPeopleToBook(bookId, people)

        if (result.hasError()) {
            return AlertService.errorMessage(result.getError().errorMessage)
        }
    }

    return (
            <div className={classes.wrapper}>
                {people.map((p) => (
                    <PeopleItem
                        key={p.id}
                        id={p.id}
                        text={p.name}
                        onPost={async () => await AddHandler(book.id, p.name)}
                        onDelete={async () => await DeleteHandler(book.id, p.id)}
                    />
                ))}

                <div className={classes.controls}>
                    <div onClick={() => ChangePage(-1)}>Предыдущая</div>
                    <div onClick={() => ChangePage(1)}>Следующая</div>
                </div>
            </div>
    );
};

export default UpdatePeopleBookForm;