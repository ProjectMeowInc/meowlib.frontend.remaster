"use client"

import React, { FC } from "react"
import { TeamRoleType } from "@/entities/Team/types/TeamRoleType"
import classes from "./memberList.module.css"
import { useMemberList } from "@/pages/TeamPages/TeamPage/UI/MemberList/useMemberList"
import Member from "@/pages/TeamPages/TeamPage/UI/MemberList/UI/Member/Member"
import AddMemberButton from "@/pages/TeamPages/TeamPage/UI/MemberList/UI/AddMemberButton/AddMemberButton"
import TeamUserModal from "@/pages/TeamPages/TeamPage/UI/TeamUserModal/TeamUserModal"
import LeaveFromTeamButton from "@/pages/TeamPages/TeamPage/UI/MemberList/UI/LeaveFromTeamButton/LeaveFromTeamButton"

interface IMemberListProps {
    teamId: number
    members: {
        id: number
        login: string
        role: TeamRoleType
    }[]
}

const MemberList: FC<IMemberListProps> = ({members, teamId}) => {

    const {userIsTeamAdmin, modalIsActive, setModalIsActive, isUserInTeam} = useMemberList(members)

    return (
        <div className={classes.wrapper}>
            <h1 className={classes.caption}>Участники</h1>
            {members.map(m => (
                <Member
                    teamId={teamId}
                    key={m.id}
                    id={m.id}
                    login={m.login}
                    role={m.role}
                    userIsAdmin={true}
                />
            ))}
            {userIsTeamAdmin && <AddMemberButton onClick={() => setModalIsActive(true)}/>}
            {modalIsActive && <TeamUserModal onClick={() => setModalIsActive(false)}/>}
            {isUserInTeam && <LeaveFromTeamButton/>}
        </div>
    )
}

export default MemberList