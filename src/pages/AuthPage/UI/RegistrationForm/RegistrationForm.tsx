import React from "react"
import InputAuthorization from "@/shared/UI/InputAuthorization/InputAuthorization"
import Button from "@/shared/UI/button/Button"
import classes from "./RegistrationForm.module.css"
import { useRegistration } from "@/entities/Auth/hooks/useRegistration"

const RegistrationForm = () => {
    const { handleInputChange, handleSubmit } = useRegistration()

    return (
        <div className={classes.container__reg_form}>
            <h2>Регистрация через логин и пароль</h2>
            <hr className={classes.reg_form__hr_one} />
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
                    type={"password"}
                    name={"password"}
                />
                <hr className={classes.reg_form__hr_two} />
                <Button styles={{ margin: "30px 42px", width: "312px" }}>Зарегистрироваться</Button>
            </form>
        </div>
    )
}
export default RegistrationForm
