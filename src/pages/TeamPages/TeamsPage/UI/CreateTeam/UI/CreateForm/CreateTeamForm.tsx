"use client"

import Input from "@/shared/UI/Input/Input"
import Button from "@/shared/UI/button/Button"
import { useCreateTeamForm } from "@/pages/TeamPages/TeamsPage/UI/CreateTeam/UI/CreateForm/useCreateTeamForm"
import classes from "./createTeamForm.module.css"

const CreateTeamForm = () => {

    const {ChangeHandler, SubmitHandler} = useCreateTeamForm()

    return (
        <form className={classes.form} onSubmit={SubmitHandler}>
            <Input
                style={{width: 30}}
                name={"name"}
                placeholder={"Введите название команды"}
                type={"text"}
                onChange={ChangeHandler}
            />
            <Input
                style={{width: 30}}
                name={"description"}
                placeholder={"Введите название команды"}
                type={"text"}
                onChange={ChangeHandler}
            />
            <Button>Создать команду</Button>
        </form>
    )
}

export default CreateTeamForm