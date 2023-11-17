import React from "react"
import classes from "@/pages/UserSettingsPage/UI/UserSettingsInput/UserSettingsInput.module.css"

interface UserSettingsInput {
    onChange?: (value: string) => void
    placeholder: string
    styles?: {
        margin?: string
    }
}

const UserSettingsInput: React.FC<UserSettingsInput> = ({ onChange, placeholder, styles }) => {

    function OnChange(value: string) {
        onChange?.call(null, value)
    }

    return (
        <input
            className={classes.user_settings_input}
            placeholder={placeholder}
            onChange={(e) => OnChange(e.target.value)}
            style={{ margin: styles?.margin }}
        />
    )
}

export default UserSettingsInput
