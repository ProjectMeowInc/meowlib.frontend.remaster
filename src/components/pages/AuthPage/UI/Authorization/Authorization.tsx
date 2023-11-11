import React from 'react';
import NavAuth from "@/components/pages/AuthPage/UI/NavAuth/NavAuth";
import RegistrationForm from "@/components/pages/AuthPage/UI/RegistrationForm/RegistrationForm";
import classes from "./Authorization.module.css";

const Authorization = () => {
    return (
        <div className={classes.authorization}>
            <NavAuth/>
            <RegistrationForm/>
        </div>
    );
};

export default Authorization;