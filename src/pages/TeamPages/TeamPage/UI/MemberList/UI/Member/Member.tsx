"use client"

import classes from "./member.module.css"
import { TeamRoleType } from "@/entities/Team/types/TeamRoleType"
import React, { FC } from "react"
import Image from "next/image"

import cross from "@/public/img/icons/cross.png"
import { useMember } from "@/pages/TeamPages/TeamPage/UI/MemberList/UI/Member/useMember"
import SelectRoleModal from "@/pages/TeamPages/TeamPage/UI/MemberList/UI/SelectRoleModel/SelectRoleModal"

interface IMemberProps {
    id: number
    login: string
    role: TeamRoleType
    userIsAdmin: boolean
    teamId: number
}

const Member: FC<IMemberProps> = ({id, login, role, userIsAdmin, teamId}) => {

    const {DeleteHandler, modalIsOpen, setModalIsOpen} = useMember(teamId)

    return (
        <div className={classes.wrapper} onClick={() => setModalIsOpen(true)}>
            <div className={classes.img}>

            </div>
            <div className={classes.info}>
                <div>
                    <p className={classes.login}>{login}</p>
                    <p className={classes.role}>{role}</p>
                </div>
                {userIsAdmin && <Image src={cross} alt={"cross icon"} width={40} height={40} onClick={async () => DeleteHandler(id)}/>}
                {modalIsOpen && <SelectRoleModal id={id} login={login} role={role} onClick={() => setModalIsOpen(false)}/>}
            </div>
        </div>
    )
}

export default Member