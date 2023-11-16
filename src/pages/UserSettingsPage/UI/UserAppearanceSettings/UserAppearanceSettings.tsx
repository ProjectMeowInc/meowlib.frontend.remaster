import React from "react"
import SwitchInput from "@/shared/UI/switchInput/SwitchInput"
import classes from "@/pages/UserSettingsPage/UI/UserAppearanceSettings/UserAppearanceSettings.module.css"

const UserAppearanceSettings = () => {
    return (
        <div className={classes.container__user_appearance_settings}>
            <div>
                <h3>Включить темную тему</h3>
                <p>Включает темную тему на сайте</p>
            </div>
            <SwitchInput />
        </div>
    )
}

export default UserAppearanceSettings
