'use client'

import React, {FC, useState} from 'react';
import classes from './UpdateBookTags.module.css'
import {useUpdateBookTags} from "@/pages/admin/books/UpdateBookTags/useUpdateBookTags";
import DeleteTagListItem from "@/pages/admin/books/UpdateBookTags/UI/DeleteTagListItem/DeleteTagListItem";
import AddBookTagList from "@/pages/admin/books/UpdateBookTags/UI/AddBookTagList/AddBookTagList";

interface IUpdateBookTagsProps {
    params: {
        bookId: number
    }
}

const UpdateBookTags:FC<IUpdateBookTagsProps> = ({ params: {bookId} }) => {

    const { tagList } = useUpdateBookTags(bookId)

    const [showTags, setShowTags] = useState<boolean>(false)

    const handleAddTagsClick = () => {
        setShowTags((prevState) => !prevState)
    }

    if(!tagList) {
        return
    }

    return (
        <div className={classes.container}>
            <h1>Теги</h1>
            <div className={classes.tags}>
                <div className={classes.add_btn} onClick={handleAddTagsClick}>+</div>
                {showTags && <AddBookTagList params={{bookId}}/>}
                {tagList?.length > 0
                  ? tagList?.map(tag => (
                       <DeleteTagListItem
                           key={tag.id}
                           id={tag.id}
                           name={tag.name}
                           description={tag.description}
                           params={{bookId}}
                       />
                    ))
                    :<p>Здесь пока ничего нет. Нажмите на +, чтобы добавить</p>
                }
            </div>
        </div>
    );
};

export default UpdateBookTags;