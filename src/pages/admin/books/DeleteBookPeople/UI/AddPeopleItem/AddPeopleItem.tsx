import React, {FC} from "react";
import classes from './AddPeopleItem.module.css'
import {PeopleRoleType} from "@/entities/People/types/PeopleRoleType";
import {useAddPeopleItem} from "@/pages/admin/books/DeleteBookPeople/UI/AddPeopleItem/useAddPeopleItem";

interface IPeopleItemProps {
    params: {
        bookId: number
    }
    id: number
    text: string
    role: PeopleRoleType
}

const AddPeopleItem: FC<IPeopleItemProps> = ({ params: {bookId}, id, text, role }) => {

    const { AddPeopleHandler } = useAddPeopleItem()

    const handleAddClick = () => {
        AddPeopleHandler(bookId, id, role);
    }

    return (
        <div className={classes.container} onClick={handleAddClick}>

            <div className={classes.text__container}>

                <p className={classes.text}>{text}</p>

                <p className={classes.author}>{role}</p>

            </div>
        </div>
    )
}
export default AddPeopleItem