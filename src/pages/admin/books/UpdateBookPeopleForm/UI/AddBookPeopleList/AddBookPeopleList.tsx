"use client"

import React, { FC, useState } from "react"
import AddPeopleItem from "@/pages/admin/books/UpdateBookPeopleForm/UI/AddPeopleItem/AddPeopleItem"
import classes from "./AddBookPeopleList.module.css"
import { useAddBookPeople } from "@/pages/admin/books/UpdateBookPeopleForm/UI/AddBookPeopleList/useAddBookPeopleList"
import EmptyTag from "@/shared/UI/EmptyTag/EmptyTag"

interface IAddBookPeopleListProps {
    bookId: number
}

const AddBookPeopleList: FC<IAddBookPeopleListProps> = ({ bookId }) => {
    const { people, ChangePage } = useAddBookPeople()
    const [open, setOpen] = useState<boolean>(true)

    const handleCloseClick = () => {
        setOpen((prevState) => !prevState)
    }

    if (!people) {
        return <EmptyTag />
    }

    return (
        <div>
            {open && (
                <div className={classes.container}>
                    <p onClick={handleCloseClick}>Закрыть</p>
                    <div className={classes.wrapper}>
                        <h2>Выберите человека, которого хотите добавить</h2>
                        {people.map((p) => (
                            <AddPeopleItem key={p.id} id={p.id} text={p.name} params={{ bookId }} role={"Author"} />
                        ))}
                        <div className={classes.controls}>
                            <div onClick={() => ChangePage(-1)}>Предыдущая</div>
                            <div onClick={() => ChangePage(1)}>Следующая</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AddBookPeopleList
