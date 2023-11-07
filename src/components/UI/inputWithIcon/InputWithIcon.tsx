import React from 'react';
import classes from "./InputWithIcon.module.css";
import image from '/src/assets/img/1.png'
import Image from "next/image";

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
            <Image src={'/img/1.png'} alt={''} className={classes.icon} width={19.23} height={19.23}/>
        </>
    );
};

export default InputWithIcon;