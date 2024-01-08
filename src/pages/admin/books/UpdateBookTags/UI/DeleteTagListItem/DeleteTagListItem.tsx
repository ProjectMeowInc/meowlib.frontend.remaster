import React, {FC} from 'react';
import classes from './DeleteTagListItem.module.css'
import {useDeleteTagListItem} from "@/pages/admin/books/UpdateBookTags/UI/DeleteTagListItem/useDeleteTagListItem";

interface ITagListItemProps {
    params: {
        bookId: number
    }
    id: number
    name: string
    description: string
}

const DeleteTagListItem:FC<ITagListItemProps> = ({ params: {bookId}, id, name, description}) => {

    const { RemoveTagHandler, tagList} = useDeleteTagListItem(bookId)

    if(!tagList) {
        return
    }

    const handleRemoveTag = async () => {
        const updatedTagList = tagList.filter(tag => tag.id !== id)

        await RemoveTagHandler(bookId, updatedTagList)
    }

    return (
        <div className={classes.container}>
            <p>{name}</p>
            <p>{description}</p>
            <p onClick={handleRemoveTag}>Удалить</p>
        </div>
    );
};

export default DeleteTagListItem;