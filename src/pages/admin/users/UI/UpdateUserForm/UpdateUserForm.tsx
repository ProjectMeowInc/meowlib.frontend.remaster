"use client"

import React, { FC } from "react"
import Input from "@/shared/UI/Input/Input"
import { useUpdateUserForm } from "@/pages/admin/users/UI/UpdateUserForm/useUpdateUserForm"
import Button from "@/shared/UI/button/Button"
import { IUserDTO } from "@/entities/User/models/dto/IUserDTO"
import classes from "./UpdateUserForm.module.css"
import { UserRoleEnum } from "@/entities/User/models/UserEntity"

interface IUpdateUserProps {
    user: IUserDTO
}

const UpdateUserForm: FC<IUpdateUserProps> = ({ user }) => {
    const { ChangeHandler, SubmitHandler } = useUpdateUserForm(user.id)

    return (
        <div className={classes.container}>
            <form onSubmit={SubmitHandler} className={classes.form}>
                <h1>Обновление пользователя</h1>
                <Input name={"login"} placeholder={"Введите логин"} onChange={ChangeHandler} style={{ margin: 10 }} />
                <Input
                    name={"password"}
                    placeholder={"Введите пароль"}
                    type={"password"}
                    onChange={ChangeHandler}
                    style={{ margin: 10 }}
                />
                <select
                    name={"role"}
                    onChange={(event) => {
                        ChangeHandler({ name: "role", newValue: event.target.value })
                    }}
                >
                    <option value={UserRoleEnum.User}>User</option>
                    <option value={UserRoleEnum.Editor}>Editor</option>
                    <option value={UserRoleEnum.Moderator}>Moderator</option>
                    <option value={UserRoleEnum.Admin}>Admin</option>
                </select>
                <Button styles={{ width: "103%", margin: "10px" }}> Отправить </Button>
            </form>
        </div>
    )
}

export default UpdateUserForm
