import React, {FC} from 'react';
import classes from './AddTagListItem.module.css'
import {useAddTagListItem} from "@/pages/admin/books/UpdateBookTags/UI/AddTagListItem/useAddTagListItem";

interface IAddTagListItemProps {
    params: {
        bookId: number
    }
    id: number
    name: string
    description: string
}

const AddTagListItem:FC<IAddTagListItemProps> = ({ params: {bookId} , id, name, description }) => {

    const { AddTagHandler } = useAddTagListItem()



    return (
        <div className={classes.container}>
            <div className={classes.text__container}>

                <p className={classes.text}>{name}</p>
                <p className={classes.author}>{description}</p>

            </div>
        </div>
    );
};

export default AddTagListItem;