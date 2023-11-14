import React from "react"
import classes from "./Button.module.css"

interface IButtonProps {
    children: string
    onClick?: () => void
}

const Button: React.FC<IButtonProps> = ({ children, onClick }) => {
    return (
        <button className={classes.btn} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
