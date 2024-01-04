import React, {FC} from 'react';
import {BookService} from "@/entities/Book/service/BookService";
import {IUpdateBookInfoPageProps} from "@/pages/admin/books/UpdateBookInfoPage/UpdateBookInfoPage";
import BookTagList from "@/pages/admin/books/UpdateBookTagsPage/BookTagList/BookTagList";
import {TagService} from "@/entities/Tag/services/TagService";
import classes from './UpdateBookTagsPage.module.css'

const UpdateBookTagsPage: FC<IUpdateBookInfoPageProps> = async ({params: {bookId}}) => {

    const getBookResult = await BookService.getBookById(bookId)

    if (getBookResult.hasError()) {
        return <div>{getBookResult.getError().errorMessage}</div>
    }

    const book = getBookResult.unwrap()

    const getTagsResult = await TagService.getAllAsync()

    if (getTagsResult.hasError()) {
        return <div>{getTagsResult.getError().errorMessage}</div>
    }

    const tags = getTagsResult.unwrap()

    return (
        <div className={classes.container}>
            <BookTagList params={{book}} tags={tags}/>
        </div>
    );
};

export default UpdateBookTagsPage;