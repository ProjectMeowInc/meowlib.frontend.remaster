"use client"

import React, {useEffect, useState} from 'react';
import classes from './MainUsersPage.module.css'
import { UsersService } from "@/entities/Users/service/UsersService";
import UserItem from "@/pages/admin/users/UI/UserItem/UserItem";
import {IUserDTO} from "@/entities/Users/models/dto/IUserDTO";

const  MainUsersPage = () => {

    const [userList, setUserList] = useState<IUserDTO[] | null>(null)

    useEffect(() => {
        UsersService.getAllUsers().then(getUserResult => {
            if (getUserResult.hasError()) {
                return <div>{getUserResult.getError().errorMessage}</div>
            }

            setUserList(getUserResult.unwrap())
        })
    }, [])

    if (!userList) {
        return (
            <p>Загрузка</p>
        )
    }

    return (
        <div className={classes.container}>
            <h2 className={classes.title}>Список пользователей</h2>

            {userList.length > 0
                    ? userList.map(user => (
                            <UserItem key={user.id} id={user.id} login={user.login} role={user.role} href={""} />
                        ))
                    : <p>Здесь пока ничего нет</p>
            }
        </div>
    );
};

export default MainUsersPage;