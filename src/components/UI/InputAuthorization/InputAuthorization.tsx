import React from 'react';
import classes from "./InputAuthorization.module.css";

interface IInputAuthorizationProps {
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    disabled?: boolean;
}
const InputAuthorization: React.FC<IInputAuthorizationProps> = ({value,placeholder,onChange, disabled}) => {
    return (
        <>
            <input placeholder={placeholder} className={classes.inpAuth}/>
        </>
    );
};

export default InputAuthorization;