import React from 'react';
import classes from "./InputAuthorization.module.css";

interface IInputAuthorizationProps {
    onChange: () => void;
    placeholder: string;
    margin?:string;
}

const InputAuthorization: React.FC<IInputAuthorizationProps> = ({placeholder, onChange, margin}) => {
    return (
            <input
                placeholder={placeholder}
                className={classes.inp_auth}
                onChange={onChange}
                style={{margin}}
            />
    );
};

export default InputAuthorization;