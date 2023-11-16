import React, {useState} from 'react';
import InputWithIcon from "@/shared/UI/inputWithIcon/InputWithIcon";
import classes from "@/pages/UserSettingsPage/UI/AccountSettings/AccountSettings.module.css"
import UserSettingsInput from "@/pages/UserSettingsPage/UI/UserSettingsInput/UserSettingsInput";

const AccountSettings = () => {

    const [email, setEmail] = useState('')

    return (
        <div className={classes.container__account_settings}>
            <h2>Настройки аккаунта</h2>
            <p>Ваша почта не привязана. Хотите привязать?</p>
            <InputWithIcon placeholder={'Введите вашу почту'} styles={{width:'328px'}}/>
            <div className={classes.account_settings__current_email_input}>
                <p>Текущая почта: someName@mail.ru</p>
                <UserSettingsInput placeholder={'someName@mail.ru'}/>
            </div>

        </div>
    );
};

export default AccountSettings;