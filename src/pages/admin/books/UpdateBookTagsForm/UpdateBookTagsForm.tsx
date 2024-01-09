"use client"

import React, { FC, useState } from "react"
import classes from "./UpdateBookTagsForm.module.css"
import { useUpdateBookTagsForm } from "@/pages/admin/books/UpdateBookTagsForm/useUpdateBookTagsForm"
import DeleteTagListItem from "@/pages/admin/books/UpdateBookTagsForm/UI/DeleteTagListItem/DeleteTagListItem"
import AddBookTagList from "@/pages/admin/books/UpdateBookTagsForm/UI/AddBookTagList/AddBookTagList"
import EmptyTag from "@/shared/UI/EmptyTag/EmptyTag"

interface IUpdateBookTagsFormProps {
    bookId: number
}

const UpdateBookTagsForm: FC<IUpdateBookTagsFormProps> = ({ bookId }) => {
    const { tagList, showTags, handleAddTagsClick } = useUpdateBookTagsForm(bookId)

    if (!tagList) {
        return <EmptyTag />
    }

    return (
        <div className={classes.container}>
            <h1>Теги</h1>
            <div className={classes.tags}>
                <div className={classes.add_btn} onClick={handleAddTagsClick}>
                    +
                </div>
                {showTags && <AddBookTagList params={{ bookId }} />}
                {tagList?.length > 0 ? (
                    tagList?.map((tag) => (
                        <DeleteTagListItem
                            key={tag.id}
                            id={tag.id}
                            name={tag.name}
                            description={tag.description}
                            bookId={bookId}
                        />
                    ))
                ) : (
                    <p>Здесь пока ничего нет. Нажмите на +, чтобы добавить</p>
                )}
            </div>
        </div>
    )
}

export default UpdateBookTagsForm
