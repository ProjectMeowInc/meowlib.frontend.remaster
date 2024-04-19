import React from "react"
import UserAppearanceSettings from "@/_pages/UserSettingsPage/UI/UserAppearanceSettings/UserAppearanceSettings"
import classes from "@/_pages/UserSettingsPage/UserSettingsPage.module.css"
import AccountSettings from "@/_pages/UserSettingsPage/UI/AccountSettings/AccountSettings"
import ChangePasswordForm from "@/_pages/UserSettingsPage/UI/ChangePasswordForm/ChangePasswordForm"

const UserSettingsPage = () => {
    return (
        <div className={classes.container__user_settings_page}>
            <div className={classes.line_one}>
                <h2>Настройки внешнего вида сайта</h2>
                <UserAppearanceSettings />
                <ChangePasswordForm />
            </div>
            <AccountSettings />
        </div>
    )
}

export default UserSettingsPage
