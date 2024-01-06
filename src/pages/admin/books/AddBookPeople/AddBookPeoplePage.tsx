'use client'

import React, {FC} from 'react';
import Preloader from "@/pages/admin/UI/Preloader/Preloader";
import AddPeopleItem from "@/pages/admin/books/AddBookPeople/AddPeopleItem/AddPeopleItem";
import classes from './AddBookPeoplePage.module.css'
import {useAddBookPeople} from "@/pages/admin/books/AddBookPeople/useAddBookPeoplePage";

interface IAddBookPeoplePageProps {
    params: {
        bookId: number
    }
}

const AddBookPeoplePage:FC<IAddBookPeoplePageProps> = ({params: {bookId}}) => {

    const { people, ChangePage } = useAddBookPeople()

    if (!people) {
        return <Preloader/>
    }

    return (
        <div className={classes.wrapper}>
            {people.map((p) => (
                <AddPeopleItem
                    key={p.id}
                    id={p.id}
                    text={p.name}
                    params={{bookId}}
                    role={'Author'}
                 />

            ))}

            <div className={classes.controls}>
                <div onClick={() => ChangePage(-1)}>Предыдущая</div>
                <div onClick={() => ChangePage(1)}>Следующая</div>
            </div>
        </div>
    );
};


export default AddBookPeoplePage;