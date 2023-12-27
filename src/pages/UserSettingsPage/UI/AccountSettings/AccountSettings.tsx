import React from "react"
import InputWithIcon from "@/shared/UI/inputWithIcon/InputWithIcon"
import classes from "@/pages/UserSettingsPage/UI/AccountSettings/AccountSettings.module.css"
import UserSettingsInput from "@/pages/UserSettingsPage/UI/UserSettingsInput/UserSettingsInput"
import Image from "next/image"
import Button from "@/shared/UI/button/Button"

const AccountSettings = () => {
    return (
        <div className={classes.container__account_settings}>
            <h2>Настройки аккаунта</h2>
            <p>Ваша почта не привязана. Хотите привязать?</p>
            <InputWithIcon placeholder={"Введите вашу почту"} styles={{ width: "328px" }} icon={"/img/1.png"} />
            <div className={classes.account_settings__current_email}>
                <div className={classes.account_settings__current_email_header}>
                    <p>Текущая почта: someName@mail.ru</p>
                    <Image src={"/img/3.png"} alt={""} width={24} height={24} />
                </div>
                <UserSettingsInput placeholder={"someName@mail.ru"} />
                <Button styles={{ backgroundColor: "#545F71", margin: "15px 0", width: "328px" }}>Отправить</Button>
            </div>
        </div>
    )
}

export default AccountSettings
