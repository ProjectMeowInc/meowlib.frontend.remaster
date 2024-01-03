"use client"

import { useCreatePeopleForm } from "@/pages/admin/people/CreatePeoplePage/UI/CreatePeopleForm/useCreatePeopleForm"
import Input from "@/shared/UI/Input/Input"
import Button from "@/shared/UI/button/Button"
import classes from "./createPeopleForm.module.css"

const CreatePeopleForm = () => {

    const {SubmitHandler, ChangeHandler} = useCreatePeopleForm()

    return (
        <form className={classes.form} onSubmit={SubmitHandler}>
            <h1>Создать человека</h1>
            <Input name={"name"} type={"text"} onChange={ChangeHandler} placeholder={"Введите ФИО человека"}/>
            <Button>Создать</Button>
        </form>
    )
}

export default CreatePeopleForm