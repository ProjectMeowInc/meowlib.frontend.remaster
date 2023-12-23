import React, { useState } from "react"
import classes from "./Checkbox.module.css"

interface ICheckboxProps {
    onChange?: (state: boolean) => void
    children?: string
    styles?: {
        margin?: string
        padding?: string
    }
}

const Checkbox: React.FC<ICheckboxProps> = ({ children, onChange, styles }) => {
    const [isChecked, setIsChecked] = useState<boolean>(false)

    function handleCheckboxChange() {
        setIsChecked((prevState) => !prevState)
        onChange?.call(null, !isChecked)
    }

    return (
        <label className={classes.checkbox} style={{ margin: styles?.margin, padding: styles?.padding }}>
            <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
            <span className={classes.checkmark}></span>
            <div className={classes.checkbox__text}>{children}</div>
        </label>
    )
}

export default Checkbox
