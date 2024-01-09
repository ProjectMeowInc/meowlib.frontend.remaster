import React from "react"
import InputAuthorization from "@/shared/UI/InputAuthorization/InputAuthorization"
import Button from "@/shared/UI/button/Button"
import classes from "@/pages/AuthPage/UI/AuthorizationForm/AuthorizationForm.module.css"
import Checkbox from "@/shared/UI/inputCheckbox/Checkbox"
import { useAuthorizationForm } from "@/pages/AuthPage/UI/AuthorizationForm/useAuthorizationForm"

const AuthorizationForm = () => {
    const { handleSubmit, handleInputChange, handleCheckbox } = useAuthorizationForm()

    return (
        <div className={classes.container__auth_form}>
            <h2>Вход через логин и пароль</h2>
            <hr className={classes.auth_form__hr_one} />
            <form onSubmit={handleSubmit}>
                <InputAuthorization
                    onChange={handleInputChange}
                    placeholder={"Введите логин"}
                    styles={{ margin: "20px 42px" }}
                    name={"login"}
                />

                <InputAuthorization
                    onChange={handleInputChange}
                    placeholder={"Введите пароль"}
                    styles={{ margin: "0 42px" }}
                    name={"password"}
                    type={"password"}
                />
                <Checkbox styles={{ margin: "15px 0 0 42px" }} onChange={handleCheckbox}>
                    Запомнить меня
                </Checkbox>
                <hr className={classes.auth_form__hr_two} />
                <Button styles={{ margin: "30px 42px", width: "312px" }}>Войти</Button>
            </form>
        </div>
    )
}
export default AuthorizationForm
