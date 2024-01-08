import React, { FC } from "react"
import classes from "./AddPeopleItem.module.css"
import { PeopleRoleType } from "@/entities/People/types/PeopleRoleType"
import { useAddPeopleItem } from "@/pages/admin/books/UpdateBookPeoplePage/UI/AddPeopleItem/useAddPeopleItem"

interface IAddPeopleItemProps {
    params: {
        bookId: number
    }
    id: number
    text: string
    role: PeopleRoleType
}

const AddPeopleItem: FC<IAddPeopleItemProps> = ({ params: { bookId }, id, text, role }) => {
    const { handleAddClick } = useAddPeopleItem(bookId, id, role)

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
