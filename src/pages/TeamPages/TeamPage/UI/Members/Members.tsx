"use client"

import React, { FC } from "react"
import { TeamRoleType } from "@/entities/Team/types/TeamRoleType"
import classes from "./members.module.css"
import Member from "@/pages/TeamPages/TeamPage/UI/Members/UI/Member/Member"
import { useMembers } from "@/pages/TeamPages/TeamPage/UI/Members/useMembers"
import AddMember from "@/pages/TeamPages/TeamPage/UI/Members/UI/AddMember/AddMember"
import UserModal from "@/pages/TeamPages/TeamPage/UI/UserModal/UserModal"
import LeaveFromTeam from "@/pages/TeamPages/TeamPage/UI/Members/UI/LeaveFromTeam/LeaveFromTeam"

interface IMembersProps {
    members: {
        id: number
        login: string
        role: TeamRoleType
    }[]
}

const Members: FC<IMembersProps> = ({members}) => {

    const {userIsAdmin, modalIsActive, setModalIsActive, isUserInTeam} = useMembers(members)

    return (
        <div className={classes.wrapper}>
            <h1 className={classes.caption}>Участники</h1>
            {members.map(m => (
                <Member
                    key={m.id}
                    id={m.id}
                    login={m.login}
                    role={m.role}
                    userIsAdmin={true}
                />
            ))}
            {userIsAdmin && <AddMember onClick={() => setModalIsActive(true)}/>}
            {modalIsActive && <UserModal onClick={() => setModalIsActive(false)}/>}
            {isUserInTeam && <LeaveFromTeam/>}
        </div>
    )
}

export default Members