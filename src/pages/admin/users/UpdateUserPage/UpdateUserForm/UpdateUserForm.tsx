"use client"

import React, {FC} from 'react';
import Input from "@/shared/UI/Input/Input";
import {useUpdateUserForm} from "@/pages/admin/users/UpdateUserPage/useUpdateUserForm";
import Button from "@/shared/UI/button/Button";
import {IUserDTO} from "@/entities/Users/models/dto/IUserDTO";
import classes from './UpdateUserForm.module.css'

interface IUpdateUserProps {
    user: IUserDTO
}

const UpdateUserForm: FC<IUpdateUserProps> = ({ user }) => {
    const { ChangeHandler, SubmitHandler } = useUpdateUserForm(user.id)

    return (
      <div className={classes.container}>
        <form onSubmit={SubmitHandler}>
            <h1>Обновление пользователя</h1>
            <Input name={'login'} placeholder={'Введите логин'} onChange={ChangeHandler} style={{margin: 10}} />
            <Input name={'password'} placeholder={'Введите пароль'} type={"password"} onChange={ChangeHandler} style={{margin: 10}} />
            <Input name={'role'} placeholder={'Введите роль'} onChange={ChangeHandler} style={{margin: 10}}/>
            <Button styles={{width: '103%', margin: '10px'}}> Отправить </Button>
        </form>
      </div>
    );
};

export default UpdateUserForm;