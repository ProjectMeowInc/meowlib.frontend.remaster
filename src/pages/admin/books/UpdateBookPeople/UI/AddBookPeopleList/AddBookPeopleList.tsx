'use client'

import React, {FC, useState} from 'react';
import Preloader from "@/pages/admin/UI/Preloader/Preloader";
import AddPeopleItem from "@/pages/admin/books/UpdateBookPeople/UI/AddPeopleItem/AddPeopleItem";
import classes from './AddBookPeopleList.module.css'
import {useAddBookPeople} from "@/pages/admin/books/UpdateBookPeople/UI/AddBookPeopleList/useAddBookPeopleList";

interface IAddBookPeopleListProps {
    params: {
        bookId: number
    }
}

const AddBookPeopleList:FC<IAddBookPeopleListProps> = ({ params: {bookId} }) => {

    const { people, ChangePage } = useAddBookPeople()
    const [open, setOpen] = useState<boolean>(true)

    const handleCloseClick = () => {
        setOpen((prevState) => !prevState)
    }

    if (!people) {
        return <Preloader/>
    }

    return (
        <div>
            {open && (
                <div className={classes.container}>
                    <p onClick={handleCloseClick}>Закрыть</p>
                    <div className={classes.wrapper}>
                        <h2>Выберите человека, которого хотите добавить</h2>
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
                </div>
            )}
        </div>
    );
};


export default AddBookPeopleList;