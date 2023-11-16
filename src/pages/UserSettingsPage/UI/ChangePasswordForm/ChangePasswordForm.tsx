import React from 'react';
import Button from "@/shared/UI/button/Button";
import UserSettingsInput from "@/pages/UserSettingsPage/UI/UserSettingsInput/UserSettingsInput";
import classes from "@/pages/UserSettingsPage/UI/ChangePasswordForm/ChangePasswordForm.module.css";

const ChangePasswordForm = () => {
    return (
        <div className={classes.container__change_password_form}>
            <h2>Настройки аккаунта</h2>
            <p>Смена пароля</p>
            <UserSettingsInput placeholder={'Введите ваш старый пароль'} styles={{margin:'15px 0 15px'}}/>
            <UserSettingsInput placeholder={'Введите ваш новый пароль'} styles={{margin:'0 0 15px'}}/>
            <UserSettingsInput placeholder={'Подтвердите ваш новый пароль'} styles={{margin:'0 0 21px'}}/>
            <Button styles={{backgroundColor:'#545F71', width:'328px', margin:'0 0 15px'}}>Отправить</Button>
        </div>
    );
};

export default ChangePasswordForm;