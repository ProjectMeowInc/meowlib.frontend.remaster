import React from "react"
import classes from "./Button.module.css"

interface IButtonProps {
    children: string
    onClick?: () => void
    styles?: {
        margin?: string
        width?: string
        backgroundColor?: string;
    }
}

const Button: React.FC<IButtonProps> = ({ children, onClick, styles }) => {
    return (
        <button className={classes.btn} onClick={onClick} style={{ margin: styles?.margin, width: styles?.width, backgroundColor: styles?.backgroundColor}}>
            {children}
        </button>
    )
}

export default Button
