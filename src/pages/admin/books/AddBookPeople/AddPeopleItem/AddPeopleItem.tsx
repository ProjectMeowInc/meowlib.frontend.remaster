import React, {FC} from "react";
import classes from './AddPeopleItem.module.css'
import {useUpdateBookForm} from "@/pages/admin/books/useUpdateBookForm";
import {PeopleRoleType} from "@/entities/People/types/PeopleRoleType";

interface IPeopleItemProps {
    params: {
        bookId: number
    }
    id: number
    text: string
    role: PeopleRoleType
}

const AddPeopleItem: FC<IPeopleItemProps> = ({params: {bookId}, id, text, role}) => {

    const {AddPeopleHandler} = useUpdateBookForm(bookId)

    const handleAddClick = () => {
        AddPeopleHandler(bookId, id, role);
    }

    return (
        <div className={classes.link}>
            <div className={classes.link__wrapper}>
                <p className={classes.link_text}>
                    {text}
                </p>
                <p className={classes.add_btn} onClick={handleAddClick}>
                    Добавить
                </p>
            </div>
        </div>
    )
}
export default AddPeopleItem