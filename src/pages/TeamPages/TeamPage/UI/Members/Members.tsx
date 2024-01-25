import React, { FC } from "react"
import { TeamRoleType } from "@/entities/Team/types/TeamRoleType"
import classes from "./members.module.css"
import Member from "@/pages/TeamPages/TeamPage/UI/Members/UI/Member/Member"

interface IMembersProps {
    members: {
        id: number
        login: string
        role: TeamRoleType
    }[]
}

const Members: FC<IMembersProps> = ({members}) => {
    return (
        <div className={classes.wrapper}>
            <h1 className={classes.caption}>Участники</h1>
            {members.map(m => (
                <Member
                    key={m.id}
                    id={m.id}
                    login={m.login}
                    role={m.role}
                />
            ))}
        </div>
    )
}

export default Members