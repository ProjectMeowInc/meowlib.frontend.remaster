import React from 'react';
import classes from "@/pages/UserSettingsPage/UI/UserSettingsInput/UserSettingsInput.module.css";

interface UserSettingsInput {
    onChange?: (value: string) => void
    placeholder: string
    styles?: {
       margin?:string
    }
}


const UserSettingsInput: React.FC<UserSettingsInput> = ({onChange, placeholder, styles}) => {
    return (
        <input
            className = {classes.user_settings_input}
            placeholder={placeholder}
            onChange={() => onChange}
            style={{margin:styles?.margin}}
        >

        </input>
    );
};

export default UserSettingsInput;