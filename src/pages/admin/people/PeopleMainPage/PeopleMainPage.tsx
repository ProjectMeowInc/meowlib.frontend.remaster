"use client"

import AdminCreateButton from "@/pages/admin/UI/AdminCreateButton/AdminCreateButton"
import classes from "./peopleMainPage.module.css"
import { usePeopleMainPage } from "@/pages/admin/people/PeopleMainPage/usePeopleMainPage"
import ListItem from "@/shared/UI/ListItem/ListItem"

const PeopleMainPage = () => {

    const {people, DeleteHandler} = usePeopleMainPage()

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
        </div>
    )
}

export default PeopleMainPage