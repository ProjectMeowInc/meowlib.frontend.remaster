"use client"

import AdminCreateButton from "@/pages/admin/UI/AdminCreateButton/AdminCreateButton"
import classes from "./peopleMainPage.module.css"
import { usePeopleMainPage } from "@/pages/admin/people/PeopleMainPage/usePeopleMainPage"
import ListItem from "@/shared/UI/ListItem/ListItem"

const PeopleMainPage = () => {

    const {people, DeleteHandler, SwapPage} = usePeopleMainPage()

    //TODO: Заменить на нормальный Loader
    if (!people) {
        return <p>Loading</p>
    }

    return (
        <div className={classes.wrapper}>
            <AdminCreateButton text={"Создать человека"} href={"/new"}/>

            {people.map(p => (
                <ListItem key={p.id} id={p.id} text={p.name} href={`/${p.id}`} onDelete={ async (id) => await DeleteHandler(id)}/>
            ))}

            <div className={classes.controls}>
                <div onClick={() => SwapPage(- 1)}>Предидущая</div>
                <div onClick={() => SwapPage(1)}>Следущая</div>
            </div>
        </div>
    )
}

export default PeopleMainPage