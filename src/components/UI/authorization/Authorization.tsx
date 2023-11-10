import React from 'react';
import NavAuth from "@/components/UI/navAuth/NavAuth";
import RegistrationForm from "@/components/UI/registrationForm/RegistrationForm";
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