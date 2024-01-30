import React, { FC } from "react"
import { useAddUserModal } from "@/pages/TeamPages/TeamPage/UI/UserModal/useAddUserModal"
import classes from "./userModal.module.css"
import Preloader from "@/pages/admin/UI/Preloader/Preloader"
import UserItem from "@/pages/TeamPages/TeamPage/UI/UserModal/UI/UserItem/UserItem"
import Image from "next/image"

import cross from "@/public/img/icons/cross.png"

interface IUserModalProps {
    onClick?: () => void
}

const UserModal: FC<IUserModalProps> = ({onClick}) => {

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
                    <UserItem key={u.id} id={u.id} login={u.login}/>
                ))}
            </div>
        </div>
    )
}

export default UserModal