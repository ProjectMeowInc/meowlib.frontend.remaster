import React, {FC} from 'react';
import classes from './AddTagListItem.module.css'
import {useAddTagListItem} from "@/pages/admin/books/UpdateBookTags/UI/AddTagListItem/useAddTagListItem";
import {IUpdateBookTagRequest} from "@/entities/Book/models/requests/UpdateBookTagRequest";

interface IAddTagListItemProps {
    params: {
        bookId: number
    }
    id: number
    name: string
    description: string
}

const AddTagListItem:FC<IAddTagListItemProps> = ({ params: {bookId} , id, name, description }) => {

    const { AddTagHandler, tagList } = useAddTagListItem(bookId)

    if(!tagList) {
        return
    }

    const handleAddTag = async () => {
        tagList.push({ id, name, description })

        const tags: IUpdateBookTagRequest = {
            tags: tagList.map((tag => (
                tag.id
            )))
        }

        await AddTagHandler(bookId, tags);
    }

    return (
        <div className={classes.container} onClick={handleAddTag}>
            <div className={classes.text__container}>

                <p className={classes.text}>{name}</p>
                <p className={classes.author}>{description}</p>

            </div>
        </div>
    );
};

export default AddTagListItem;