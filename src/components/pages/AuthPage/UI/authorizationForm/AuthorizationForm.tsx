import React from 'react';
import InputAuthorization from "@/components/UI/InputAuthorization/InputAuthorization";
import Button from "@/components/UI/button/Button";
import classes from "@/components/pages/AuthPage/UI/authorizationForm/AuthorizationForm.module.css";

const AuthorizationForm = () => {
    return (
            <div className={classes.container__auth_form}>
                <h2>Вход через логин и пароль</h2>
                <hr className={classes.auth_form__hr_one}/>
                <form>
                    <InputAuthorization onChange={() =>{}} placeholder={'Введите логин'} margin = '30px 42px'/>
                    <InputAuthorization onChange={() =>{}} placeholder={'Введите пароль'} margin = '0 42px '/>
                    <hr className={classes.auth_form__hr_two}/>
                    <Button onClick={() => {}} margin ='30px 42px' width='312px'>Зарегистрироваться</Button>
                </form>
            </div>
    );
};

export default AuthorizationForm;