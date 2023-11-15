import React from "react"
import classes from "./InputAuthorization.module.css"

interface IInputAuthorizationProps {
    onChange: () => void
    placeholder: string
}

const InputAuthorization: React.FC<IInputAuthorizationProps> = ({
    placeholder,
    onChange,
}) => {
    return (
        <input
            placeholder={placeholder}
            className={classes.inp_auth}
            onChange={onChange}
        />
    )
}

export default InputAuthorization
