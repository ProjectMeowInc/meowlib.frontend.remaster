"use client"

import React, { FC } from "react"
import Input from "@/shared/UI/Input/Input"
import { ITagDTO } from "@/entities/Tag/models/dto/ITagDTO"
import classes from "./updateTagForm.module.css"
import Button from "@/shared/UI/button/Button"
import { useUpdateTagPage } from "@/pages/admin/tags/UpdateTagPage/useUpdateTagPage"

interface IUpdateTagFormProps {
    tag: ITagDTO
}

const UpdateTagForm: FC<IUpdateTagFormProps> = ({tag}) => {

    const {ChangeHandler, SubmitHandler} = useUpdateTagPage(tag.id)

    return (
        <form className={classes.form} onSubmit={SubmitHandler}>
            <h1>Обновление тега</h1>
            <Input
                name={"name"}
                placeholder={tag.name}
                onChange={ChangeHandler}
            />
            <Input
                name={"description"}
                placeholder={tag.description}
                onChange={ChangeHandler}
            />
            <Button>Отправить</Button>
        </form>
    )
}

export default UpdateTagForm