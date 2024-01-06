'use client'

import React, {FC} from 'react';
import DeleteBookPeopleItem from "@/pages/admin/books/DeleteBookPeople/DeleteBookPeopleItem/DeleteBookPeopleItem";
import Preloader from "@/pages/admin/UI/Preloader/Preloader";
import classes from './DeleteBookPeoplePage.module.css'
import {useDeleteBookPeoplePage} from "@/pages/admin/books/DeleteBookPeople/useDeleteBookPeoplePage";

interface IDeleteBookPeoplePageProps {
    params: {
        bookId: number
    }
}

const DeleteBookPeoplePage:FC<IDeleteBookPeoplePageProps> =  ({ params:{bookId} } ) => {

    const {peopleList} = useDeleteBookPeoplePage(bookId)

    if(!peopleList) {
        return (
            <Preloader/>
        )
    }

    return (
        <div className={classes.container}>
            <h2>Выберите какого человека вы хотите удалить</h2>
            {peopleList?.length > 0
                ? peopleList?.map(people => (
                    <DeleteBookPeopleItem
                        key={people.id}
                        id={people.id}
                        name={people.name}
                        role={people.role}
                        params={{bookId}}
                    />
                ))
                 : <p>Здесь пока ничего нет</p>
            }
        </div>
    );
};

export default DeleteBookPeoplePage;