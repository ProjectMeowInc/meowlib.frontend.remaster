import MainAdminPageListItem from "@/pages/admin/MainAdminPage/UI/MainAdminPageListItem/MainAdminPageListItem"
import classes from "./mainAdminPage.module.css"

const MainAdminPage = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.panel}>
                <h1>Админ панель</h1>
                <div className={classes.items}>
                    <MainAdminPageListItem href={"/admin/tags"}>Теги</MainAdminPageListItem>
                    <MainAdminPageListItem href={"/admin/users"}>Пользователи</MainAdminPageListItem>
                    <MainAdminPageListItem href={"/admin/books"}>Книги</MainAdminPageListItem>
                    <MainAdminPageListItem href={"/admin/people?page=1"}>Люди</MainAdminPageListItem>
                </div>
            </div>
        </div>
    )
}

export default MainAdminPage
