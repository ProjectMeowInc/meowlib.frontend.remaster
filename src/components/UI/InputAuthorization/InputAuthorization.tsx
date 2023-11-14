import React from 'react';
import classes from "./InputAuthorization.module.css";

interface IInputAuthorizationProps {
    onChange?: (value: string) => void;
    placeholder: string;
    margin?:string;
}

const InputAuthorization: React.FC<IInputAuthorizationProps> = ({placeholder, onChange, margin}) => {
    return (
            <input
                placeholder={placeholder}
                className={classes.inp_auth}
                onChange={e => onChange ? onChange(e.target.value) : ''}
                style={{margin}}
            />
    );
};

export default InputAuthorization;