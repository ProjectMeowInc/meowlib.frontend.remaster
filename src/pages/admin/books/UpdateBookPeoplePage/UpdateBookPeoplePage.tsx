"use client"

import React, { FC, useState } from "react"
import DeleteBookPeopleItem from "@/pages/admin/books/UpdateBookPeoplePage/UI/DeleteBookPeopleItem/DeleteBookPeopleItem"
import classes from "./UpdateBookPeoplePage.module.css"
import { useUpdateBookPeoplePage } from "@/pages/admin/books/UpdateBookPeoplePage/useUpdateBookPeoplePage"
import AddBookPeopleList from "@/pages/admin/books/UpdateBookPeoplePage/UI/AddBookPeopleList/AddBookPeopleList"
import EmptyTag from "@/shared/UI/EmptyTag/EmptyTag"

interface IUpdateBookPeopleProps {
    params: {
        bookId: number
    }
}

const UpdateBookPeoplePage: FC<IUpdateBookPeopleProps> = ({ params: { bookId } }) => {
    const { peopleList } = useUpdateBookPeoplePage(bookId)

    const [showPeople, setShowPeople] = useState<boolean>(false)

    const handleAddPeopleClick = () => {
        setShowPeople((prevState) => !prevState)
    }

    if (!peopleList) {
        return <EmptyTag />
    }

    return (
        <div className={classes.container}>
            <h1>Люди</h1>
            <div className={classes.peoples}>
                <div className={classes.add_btn} onClick={handleAddPeopleClick}>
                    +
                </div>
                {showPeople && <AddBookPeopleList bookId={bookId} />}
                {peopleList?.length > 0 ? (
                    peopleList?.map((people) => (
                        <DeleteBookPeopleItem
                            key={people.id}
                            id={people.id}
                            name={people.name}
                            role={people.role}
                            bookId={bookId}
                        />
                    ))
                ) : (
                    <p>Здесь пока ничего нет. Нажмите на +, чтобы добавить</p>
                )}
            </div>
        </div>
    )
}

export default UpdateBookPeoplePage
