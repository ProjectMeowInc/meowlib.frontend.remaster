import React, { FC } from "react"
import classes from "./addMember.module.css"

interface IAddMemberProps {
    onClick?: () => void
}

const AddMember: FC<IAddMemberProps> = ({onClick}) => {
    return (
        <div onClick={onClick} className={classes.button}>
            Добавить пользователя
        </div>
    )
}

export default AddMember