import React, {FC} from 'react';
import classes from './MainUpdateBookPage.module.css'
import UpdateImageBookForm from "@/pages/admin/books/UpdateImageBookForm/UpdateImageBookForm";
import AddBookPeoplePage from "@/pages/admin/books/AddBookPeople/AddBookPeoplePage";
import DeleteBookPeoplePage from "@/pages/admin/books/DeleteBookPeople/DeleteBookPeoplePage";
import UpdateInfoBookForm from "@/pages/admin/books/UpdateInfoBookForm/UpdateInfoBookForm";

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
             <AddBookPeoplePage params={{bookId}} />
             <DeleteBookPeoplePage params={{bookId}}/>
        </div>
    );
};

export default MainUpdateBookPage;