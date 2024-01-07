'use client'

import React, {FC, useState} from 'react';
import DeleteBookPeopleItem from "@/pages/admin/books/UpdateBookPeople/UI/DeleteBookPeopleItem/DeleteBookPeopleItem";
import Preloader from "@/pages/admin/UI/Preloader/Preloader";
import classes from './UpdateBookPeople.module.css'
import {useUpdateBookPeople} from "@/pages/admin/books/UpdateBookPeople/useUpdateBookPeople";
import AddBookPeopleList from "@/pages/admin/books/UpdateBookPeople/UI/AddBookPeopleList/AddBookPeopleList";

interface IDeleteBookPeoplePageProps {
    params: {
        bookId: number
    }
}

const UpdateBookPeople:FC<IDeleteBookPeoplePageProps> =  ({ params:{bookId} } ) => {

    const { peopleList } = useUpdateBookPeople(bookId)

    const [showPeople, setShowPeople] = useState<boolean>(false)

    const handleAddPeopleClick = () => {
        setShowPeople((prevState) => !prevState)
    }

    if(!peopleList) {
        return (
            <Preloader/>
        )
    }

    return (
        <div className={classes.container}>
            <h1>Люди</h1>
          <div className={classes.peoples}>
              <div className={classes.add_btn} onClick={handleAddPeopleClick}>Нажмите, чтобы добавить человека</div>
              {showPeople && <AddBookPeopleList params={{bookId}}/>}
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
        </div>
    );
};

export default UpdateBookPeople;