import React from "react"
import classes from "./InputAuthorization.module.css"
import {IOnChangeEvent} from "@/shared/models/events/IOnChangeEvent";

// TODO: добавить документацию
interface IInputAuthorizationProps {
    onChange?: (event: IOnChangeEvent) => void
    placeholder: string
    styles?: {
        margin: string
    }
    value?: string
    type?: string
    // TODO: особенно для этого
    name: string
}


const InputAuthorization: React.FC<IInputAuthorizationProps> = ({
    placeholder,
    styles,
    value,
    type,
    name,
    onChange
}) => {
    function changeHandler(event: IOnChangeEvent): void {
        onChange?.call(null, event)
    }

    return (
        <input
            placeholder={placeholder}
            className={classes.inp_auth}
            onChange={(event) => changeHandler({
                newValue: event.target.value,
                name: name
            })}
            style={{ margin: styles?.margin }}
            value={value}
            type={type}
            name={name}
        />
    )
}

export default InputAuthorization
