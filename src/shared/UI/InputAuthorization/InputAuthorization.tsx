import React from "react"
import classes from "./InputAuthorization.module.css"

interface IInputAuthorizationProps {
    onChange: (value: string) => void
    placeholder: string
    styles?: {
        margin:string;
    }
}

const InputAuthorization: React.FC<IInputAuthorizationProps> = ({ placeholder, onChange, styles}) => {
    return <input placeholder={placeholder} className={classes.inp_auth} onChange={() => onChange} style={{margin:styles?.margin}}/>
}

export default InputAuthorization
