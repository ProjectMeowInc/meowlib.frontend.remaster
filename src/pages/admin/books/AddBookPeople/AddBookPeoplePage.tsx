'use client'

import React, {FC} from 'react';
import {usePeopleMainPage} from "@/pages/admin/people/PeopleMainPage/usePeopleMainPage";
import Preloader from "@/pages/admin/UI/Preloader/Preloader";
import AddPeopleItem from "@/pages/admin/books/AddBookPeople/AddPeopleItem/AddPeopleItem";
import classes from './AddBookPeoplePage.module.css'
import {IUpdateBookInfoPageProps} from "@/pages/admin/books/UpdateBookInfoPage/UpdateBookInfoPage";

const AddBookPeoplePage:FC<IUpdateBookInfoPageProps> = ({params: {bookId}}) => {

    const { people, ChangePage } = usePeopleMainPage()

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