"use client"

import React, { FC } from "react"
import Button from "@/shared/UI/button/Button"
import classes from "./userItem.module.css"
import { useUserItem } from "@/pages/TeamPages/TeamPage/UI/UserModal/UI/UserItem/useUserItem"

interface IUserItemProps {
    id: number
    login: string
}

const UserItem: FC<IUserItemProps> = ({id, login}) => {

    const {InviteUser} = useUserItem()

    return (
        <div className={classes.wrapper}>
            <p>{login}</p>
            <Button onClick={async () => await InviteUser(id)}>Добавить в команду</Button>
        </div>
    )
}

export default UserItem