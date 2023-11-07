import React from 'react';
import classes from "./InputWithIcon.module.css";
import image from '/src/assets/img/1.png'

interface IInputWithIconProps {
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    disabled?: boolean;
}

const InputWithIcon: React.FC<IInputWithIconProps> = ({value,placeholder,onChange, disabled}) => {
    return (
        <>
            <input placeholder={placeholder} className={classes.inpWithIcon}/>
            <img src='/src/assets/img/1.png' className={classes.icon}/>
        </>
    );
};

export default InputWithIcon;