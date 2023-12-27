import React from "react"
import classes from "./InputWithIcon.module.css"

interface IInputWithIconProps {
    onChange?: () => void
    placeholder: string
    styles?: {
        width?: string
    }
    icon?: string
}

const InputWithIcon: React.FC<IInputWithIconProps> = ({ placeholder, onChange, styles, icon }) => {
    return (
        <div className={classes.inp_with_icon__container}>
            <input
                placeholder={placeholder}
                className={classes.inp_with_icon}
                onChange={onChange}
                style={{ width: styles?.width }}
            />
            <img src={icon} alt={""} className={classes.icon} />
        </div>
    )
}

export default InputWithIcon
