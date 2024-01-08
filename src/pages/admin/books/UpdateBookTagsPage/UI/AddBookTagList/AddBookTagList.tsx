"use client"

import React, { FC } from "react"
import AddTagListItem from "@/pages/admin/books/UpdateBookTagsPage/UI/AddTagListItem/AddTagListItem"
import { useAddBookTagList } from "@/pages/admin/books/UpdateBookTagsPage/UI/useAddBookTagList"
import classes from "./AddBookTagList.module.css"
import EmptyTag from "@/shared/UI/EmptyTag/EmptyTag"

interface IAddBookTagsListProps {
    params: {
        bookId: number
    }
}

const AddBookTagList: FC<IAddBookTagsListProps> = ({ params: { bookId } }) => {
    const { tags, handleCloseClick, open } = useAddBookTagList()

    if (!tags) {
        return <EmptyTag />
    }

    return (
        <div>
            {open && (
                <div className={classes.container}>
                    <p onClick={handleCloseClick}>Закрыть</p>
                    <div className={classes.wrapper}>
                        <h2>Выберите тег, который хотите добавить</h2>
                        {tags.map((tag) => (
                            <AddTagListItem
                                params={{ bookId }}
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
    )
}

export default AddBookTagList
