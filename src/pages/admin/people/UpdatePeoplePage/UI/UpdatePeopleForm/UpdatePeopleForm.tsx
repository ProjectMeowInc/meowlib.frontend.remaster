"use client"

import { FC } from "react"
import Input from "@/shared/UI/Input/Input"
import Button from "@/shared/UI/button/Button"
import { useUpdatePeopleForm } from "@/pages/admin/people/UpdatePeoplePage/UI/UpdatePeopleForm/useUpdatePeopleForm"

interface IUpdatePeopleFormProps {
    id: number
    name: string
}

const UpdatePeopleForm: FC<IUpdatePeopleFormProps> = ({id, name}) => {

    const {SubmitHandler, ChangeHandler} = useUpdatePeopleForm(id, name)

    return (
        <form onSubmit={SubmitHandler}>
            <h1>Обновление человека</h1>
            <Input name={"name"} type={"text"} placeholder={name} onChange={ChangeHandler}/>
            <Button>Отравить</Button>
        </form>
    )
}

export default UpdatePeopleForm