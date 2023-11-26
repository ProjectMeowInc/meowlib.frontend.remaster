import React, { useState } from "react"
import classes from "./Checkbox.module.css"

interface ICheckboxProps {
    onClick?: (state: boolean) => void
    children?: string
    styles?: {
        margin?: string
        padding?: string
    }
}

const Checkbox: React.FC<ICheckboxProps> = ({ children, onClick, styles }) => {
    const [isChecked, setIsChecked] = useState<boolean>(false)

    function handleCheckboxChange() {
        setIsChecked((prevState) => !prevState)
    }

    return (
        <label
            className={classes.checkbox}
            style={{ margin: styles?.margin, padding: styles?.padding }}
            onClick={() => onClick}
        >
            <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
            <span className={classes.checkmark}></span>
            <div className={classes.checkbox__text}>{children}</div>
        </label>
    )
}

export default Checkbox
