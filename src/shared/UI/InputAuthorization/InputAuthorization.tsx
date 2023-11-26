import React, {useState} from "react"
import classes from "./InputAuthorization.module.css"
import {IOnChangeEvent} from "@/shared/models/events/IOnChangeEvent";

interface IInputAuthorizationProps {
    onChange?: (event: IOnChangeEvent) => void
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
    styles,
    value,
    type,
    name,
}) => {

    const [state, setState] = useState('')

    function changeHandler(newValue: string): void {
        setState(newValue)
    }

    return (
        <input
            placeholder={placeholder}
            className={classes.inp_auth}
            onChange={(event)=> changeHandler(event.target.value)}
            style={{ margin: styles?.margin }}
            value={value}
            type={type}
            name={name}
        />
    )
}

export default InputAuthorization
