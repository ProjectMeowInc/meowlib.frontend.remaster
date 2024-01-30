"use client"

import classes from "./member.module.css"
import { TeamRoleType } from "@/entities/Team/types/TeamRoleType"
import React, { FC } from "react"
import Image from "next/image"

import cross from "@/public/img/icons/cross.png"
import { useMember } from "@/pages/TeamPages/TeamPage/UI/Members/UI/Member/useMember"

interface IMemberProps {
    id: number
    login: string
    role: TeamRoleType
    userIsAdmin: boolean
}

const Member: FC<IMemberProps> = ({id, login, role}) => {

    const {DeleteHandler} = useMember()

    return (
        <div className={classes.wrapper}>
            <div className={classes.img}>

            </div>
            <div className={classes.info}>
                <div>
                    <p className={classes.login}>{login}</p>
                    <p className={classes.role}>{role}</p>
                </div>
                <Image src={cross} alt={"cross icon"} width={40} height={40} onClick={async () => DeleteHandler(id)}/>
            </div>
        </div>
    )
}

export default Member