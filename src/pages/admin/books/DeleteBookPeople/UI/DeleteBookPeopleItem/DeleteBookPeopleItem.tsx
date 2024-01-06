import React, {FC} from 'react';
import {PeopleRoleType} from "@/entities/People/types/PeopleRoleType";
import classes from './DeleteBookPeopleItem.module.css'
import {
    useDeleteBookPeopleItem
} from "@/pages/admin/books/DeleteBookPeople/UI/DeleteBookPeopleItem/useDeleteBookPeopleItem";

interface IDeleteBookPeopleItemProps {
    params: {
        bookId: number
    }
    id: number
    name: string
    role: PeopleRoleType
}

const DeleteBookPeopleItem:FC<IDeleteBookPeopleItemProps> = ({params: {bookId}, id, name , role}) => {

    const { DeletePeopleHandler } = useDeleteBookPeopleItem()

    const handleDeleteClick = () => {
        DeletePeopleHandler(bookId, id)

    }

    return (
        <div className={classes.container} onClick={handleDeleteClick}>
            <p>{name}</p>
            <p>{role}</p>
            <p>Удалить</p>
        </div>
    );
};

export default DeleteBookPeopleItem;