import React from 'react';
import classes from "./Button.module.css";

interface IButtonProps {
    children:string;
    onClick?:() => void;
    className?:string;
}

const Button: React.FC<IButtonProps> = ({children, className,onClick}) => {
    return (
        <>
        <button className={classes.btn}>
            {children}
        </button>
        </>
    );
};

export default Button;