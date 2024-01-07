'use client'

import React, {FC, useState} from 'react';
import AddTagListItem from "@/pages/admin/books/UpdateBookTags/UI/AddTagListItem/AddTagListItem";
import {useAddBookTagList} from "@/pages/admin/books/UpdateBookTags/UI/useAddBookTagList";
import classes from './AddBookTagList.module.css'


interface IAddBookTagsListProps {
    params: {
        bookId: number
    }
}

const AddBookTagList:FC<IAddBookTagsListProps> = ({ params: {bookId} }) => {

    const { tags } = useAddBookTagList()

    const [open, setOpen] = useState<boolean>(true)

    const handleCloseClick = () => {
        setOpen((prevState) => !prevState)
    }

    if(!tags) {
        return
    }

    return (
        <div>
            {open && (
                <div className={classes.container}>
                    <p onClick={handleCloseClick}>Закрыть</p>
                    <div className={classes.wrapper}>
                        <h2>Выберите тег, который хотите добавить</h2>
                        {tags.map((tag) =>(
                            <AddTagListItem
                                params={{bookId}}
                                key={tag.id}
                                id={tag.id}
                                name={tag.name}
                                description={tag.description}
                            />
                        ))}
                    </div>
                </div>
            )}

        </div>
    );
};

export default AddBookTagList;