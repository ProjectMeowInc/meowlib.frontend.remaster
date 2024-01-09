"use client"

import React, { useEffect, useState } from "react"
import classes from "./MainUsersPage.module.css"
import { UsersService } from "@/entities/User/service/UsersService"
import UserItem from "@/pages/admin/users/UI/UserItem/UserItem"
import { IUserDTO } from "@/entities/User/models/dto/IUserDTO"
import Preloader from "@/pages/admin/UI/Preloader/Preloader"

const MainUsersPage = () => {
    const [usersList, setUsersList] = useState<IUserDTO[] | null>(null)

    useEffect(() => {
        UsersService.getAllUsers().then((getUserResult) => {
            if (getUserResult.hasError()) {
                return <div>{getUserResult.getError().errorMessage}</div>
            }

            setUsersList(getUserResult.unwrap())
        })
    }, [])

    if (!usersList) {
        return <Preloader />
    }

    return (
        <div className={classes.container}>
            <h2 className={classes.title}>Список пользователей</h2>

            {usersList.length > 0 ? (
                usersList.map((user) => <UserItem key={user.id} id={user.id} login={user.login} role={user.role} />)
            ) : (
                <p>Здесь пока ничего нет</p>
            )}
        </div>
    )
}

export default MainUsersPage
