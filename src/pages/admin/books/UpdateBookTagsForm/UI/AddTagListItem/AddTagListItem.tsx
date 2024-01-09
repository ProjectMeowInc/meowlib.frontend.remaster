import React, { FC } from "react"
import classes from "./AddTagListItem.module.css"
import { useAddTagListItem } from "@/pages/admin/books/UpdateBookTagsForm/UI/AddTagListItem/useAddTagListItem"

interface IAddTagListItemProps {
    params: {
        bookId: number
    }
    id: number
    name: string
    description: string
}

const AddTagListItem: FC<IAddTagListItemProps> = ({ params: { bookId }, id, name, description }) => {
    const { handleAddTag } = useAddTagListItem(bookId, id, name, description)

    return (
        <div className={classes.container} onClick={handleAddTag}>
            <div className={classes.text__container}>
                <p className={classes.text}>{name}</p>
                <p className={classes.author}>{description}</p>
            </div>
        </div>
    )
}

export default AddTagListItem
