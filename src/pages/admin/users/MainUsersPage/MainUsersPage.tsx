import React, {useEffect, useState} from 'react';
import classes from './MainUsersPage.module.css'
import { UsersService } from "@/entities/Users/service/UsersService";
import UserItem from "@/pages/admin/users/UI/UserItem/UserItem";
import {IUserDTO} from "@/entities/Users/models/dto/IUserDTO";

const  MainUsersPage =  () => {

    const [userList, setUserList] = useState<IUserDTO[] | null>(null)

    useEffect(() => {
        UsersService.getAllUsers().then(getUserResult => {
            if (getUserResult.hasError()) {
                return <div>{getUserResult.getError().errorMessage}</div>
            }

            setUserList(getUserResult.unwrap())
        })
    }, [])

    return (
        <div className={classes.container}>
            <h2 className={classes.title}>Список пользователей</h2>

            {userList === null
                ? <p>Загрузка</p>
                : userList.length === 0
                    ? <p>Здесь пока ничего нет</p>
                    : userList.map(user => (
                        <UserItem key={user.id} id={user.id} login={user.login} role={user.role} href={''}/>
                    ))
            }
        </div>
    );
};

export default MainUsersPage;