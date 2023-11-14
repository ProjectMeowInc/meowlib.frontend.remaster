import React from 'react';
import classes from "./Button.module.css";

interface IButtonProps {
    children: string;
    onClick?: () => void;
    margin?:string;
    width?:string;
}

const Button: React.FC<IButtonProps> = ({children, onClick, margin, width}) => {
    return (
        <button
            className={classes.btn}
            onClick={onClick}
            style={{margin,width}}
        >
            {children}
        </button>
    );
};

export default Button;