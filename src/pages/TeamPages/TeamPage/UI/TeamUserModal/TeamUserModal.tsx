import React, { FC } from "react"
import classes from "./teamUserModal.module.css"
import Preloader from "@/pages/admin/UI/Preloader/Preloader"
import Image from "next/image"

import cross from "@/public/img/icons/cross.png"
import { useAddUserModal } from "@/pages/TeamPages/TeamPage/UI/TeamUserModal/useAddUserModal"
import UserItem from "@/pages/admin/users/UI/UserItem/UserItem"

interface ITeamUserModalProps {
    onClick?: () => void
}

const TeamUserModal: FC<ITeamUserModalProps> = ({onClick}) => {

    const {users} = useAddUserModal()

    if (!users) {
        return <Preloader/>
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.modal}>
                <div className={classes.header}>
                    <h1>Добавить пользователя в команду</h1>
                    <Image onClick={onClick} className={classes.cross} src={cross} alt={"cross icon"} width={40} height={40}/>
                </div>
                {users.map(u => (
                    <UserItem key={u.id} id={u.id} login={u.login} role={u.role}/>
                ))}
            </div>
        </div>
    )
}

export default TeamUserModal