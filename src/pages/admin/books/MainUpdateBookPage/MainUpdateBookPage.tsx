import React, {FC} from 'react';
import classes from './MainUpdateBookPage.module.css'
import UpdateImageBookForm from "@/pages/admin/books/UpdateImageBookForm/UpdateImageBookForm";
import UpdateBookPeople from "@/pages/admin/books/DeleteBookPeople/UpdateBookPeople";
import UpdateInfoBookForm from "@/pages/admin/books/UpdateInfoBookForm/UpdateInfoBookForm";
import UpdateBookTagsPage from "@/pages/admin/books/UpdateBookTagsPage/UpdateBookTagsPage";

interface IUpdateBookPageProps {
   params: {
       bookId: number
   }
}

const MainUpdateBookPage: FC<IUpdateBookPageProps> = async ({ params: {bookId} }) => {


    return (
        <div className={classes.container}>
            <h1>Обновление книги</h1>
             <UpdateInfoBookForm params={{bookId}}/>
             <UpdateImageBookForm params={{bookId}}/>
             <UpdateBookPeople params={{bookId}}/>
             <UpdateBookTagsPage params={{bookId}} />
        </div>
    );
};

export default MainUpdateBookPage;