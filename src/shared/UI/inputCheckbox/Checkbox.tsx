import React, { useState } from "react"
import classes from "./Checkbox.module.css"

const Checkbox = () => {
    const [isChecked, setIsChecked] = useState(false)

    function handleCheckboxChange() {
        setIsChecked((prevState) => !prevState)
    }

    return (
        <label className={classes.checkbox}>
            <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
            <span className={classes.checkmark}></span>
        </label>
    )
}

export default Checkbox
