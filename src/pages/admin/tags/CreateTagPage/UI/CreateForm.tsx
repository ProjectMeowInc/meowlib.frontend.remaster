"use client"

import Input from "@/shared/UI/Input/Input"
import Button from "@/shared/UI/button/Button"
import classes from "./createForm.module.css"
import { useCreateTagPage } from "@/pages/admin/tags/CreateTagPage/useCreateTagPage"

const CreateForm = () => {

    const {SubmitHandler, ChangeHandler} = useCreateTagPage()

    return (
        <form className={classes.form} onSubmit={SubmitHandler}>
            <h1>Создание тега</h1>
            <Input
                onChange={ChangeHandler}
                name={"name"}
                placeholder={"Введите название тега"}
                type={"text"}
            />

            <Input
                onChange={ChangeHandler}
                name={"description"}
                placeholder={"Введите описание тега"}
                type={"text"}
            />

            <Button styles={{width: "100%"}}>
                Создать тег
            </Button>
        </form>
    )
}

export default CreateForm