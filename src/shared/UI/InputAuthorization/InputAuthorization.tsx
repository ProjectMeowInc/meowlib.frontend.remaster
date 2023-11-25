import React from "react"
import classes from "./InputAuthorization.module.css"

interface IInputAuthorizationProps {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    placeholder: string
    styles?: {
        margin: string
    }
    value?: string
    type?: string
    name?: string
}

const InputAuthorization: React.FC<IInputAuthorizationProps> = ({
    placeholder,
    onChange,
    styles,
    value,
    type,
    name,
}) => {
    return (
        <input
            placeholder={placeholder}
            className={classes.inp_auth}
            onChange={onChange}
            style={{ margin: styles?.margin }}
            value={value}
            type={type}
            name={name}
        />
    )
}

export default InputAuthorization
