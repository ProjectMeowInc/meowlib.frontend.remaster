"use client"

import React, { FC } from "react"
import classes from "./UserItem.module.css"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { UserRoleEnum } from "@/entities/User/models/UserEntity"

interface IUserItemProps {
    id: number
    login: string
    role: UserRoleEnum
}

const UserItem: FC<IUserItemProps> = ({ id, login, role }) => {
    const pathname = usePathname()

    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <p className={classes.id}>{id}</p>
                <p className={classes.login}>{login}</p>
                <p className={classes.role}>{role}</p>
                <Link href={`${pathname}/${id}/edit`} className={classes.link_text}>
                    {" "}
                    Изменить{" "}
                </Link>
            </div>
        </div>
    )
}

export default UserItem
