import React from "react"
import InputAuthorization from "@/shared/UI/InputAuthorization/InputAuthorization"
import Button from "@/shared/UI/button/Button"
import classes from "./RegistrationForm.module.css"

const RegistrationForm = () => {
    return (
        <div className={classes.container__reg_form}>
            <h2>Регистрация через логин и пароль</h2>
            <hr className={classes.reg_form__hr_one} />
            <form>
                <InputAuthorization placeholder={"Введите логин"} styles={{ margin: "20px 42px" }} />

                <InputAuthorization placeholder={"Введите пароль"} styles={{ margin: "0 42px" }} />

                <hr className={classes.reg_form__hr_two} />
                <Button styles={{ margin: "30px 42px", width: "312px" }}>Зарегистрироваться</Button>
            </form>
        </div>
    )
}

export default RegistrationForm
