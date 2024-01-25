import classes from "./member.module.css"
import { TeamRoleType } from "@/entities/Team/types/TeamRoleType"
import React, { FC } from "react"

interface IMemberProps {
    id: number
    login: string
    role: TeamRoleType
}

const Member: FC<IMemberProps> = ({id, login, role}) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.img}>

            </div>
            <div>
                <p className={classes.login}>{login}</p>
                <p className={classes.role}>{role}</p>
            </div>
        </div>
    )
}

export default Member