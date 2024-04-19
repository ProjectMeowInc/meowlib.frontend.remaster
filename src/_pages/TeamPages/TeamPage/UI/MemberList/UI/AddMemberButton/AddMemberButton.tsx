import React, { FC } from "react"
import classes from "./addMemberButton.module.css"

interface IAddMemberButtonProps {
    onClick?: () => void
}

const AddMemberButton: FC<IAddMemberButtonProps> = ({onClick}) => {
    return (
        <div onClick={onClick} className={classes.button}>
            Добавить пользователя
        </div>
    )
}

export default AddMemberButton