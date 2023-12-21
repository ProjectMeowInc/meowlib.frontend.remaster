import React from "react"
import classes from "./Button.module.css"

interface IButtonProps {
    children: string
    onClick?: () => void
    lockFunction?: () => Promise<void>
    styles?: {
        margin?: string
        width?: string
        backgroundColor?: string
    }
    className?: string
}

const Button: React.FC<IButtonProps> = ({ children, onClick, styles, className }) => {
    return (
        <button
            className={`${classes.btn} ${className}`}
            onClick={onClick}
            style={{ margin: styles?.margin, width: styles?.width, backgroundColor: styles?.backgroundColor }}
            type={"submit"}
        >
            {children}
        </button>
    )
}

export default Button
