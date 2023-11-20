import React, { useState } from "react"
import InputAuthorization from "@/shared/UI/InputAuthorization/InputAuthorization"
import Button from "@/shared/UI/button/Button"
import classes from "@/pages/AuthPage/UI/AuthorizationForm/AuthorizationForm.module.css"
import { AuthService } from "@/shared/services/AuthService"
import { TokenService } from "@/shared/services/TokenService"

const AuthorizationForm = () => {
    const [login, setLogin] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [isLongSession, setIsLongSession] = useState<boolean>(false)

    async function SubmitHandler(login: string, password: string, isLongSession: boolean): Promise<void> {
        const res = await AuthService.authorization({
            login,
            password,
            isLongSession,
        })

        const loginData = res.unwrap()
        TokenService.setAccessToken(loginData.accessToken)
        TokenService.setRefreshToken(loginData.refreshToken)
    }

    return (
        <div className={classes.container__auth_form}>
            <h2>Вход через логин и пароль</h2>
            <hr className={classes.auth_form__hr_one} />
            <form>
                <InputAuthorization
                    onChange={(value) => setLogin(value)}
                    placeholder={"Введите логин"}
                    styles={{ margin: "20px 42px" }}
                />

                <InputAuthorization
                    onChange={(value) => setPassword(value)}
                    placeholder={"Введите пароль"}
                    styles={{ margin: "0 42px" }}
                />

                <hr className={classes.auth_form__hr_two} />
                <Button
                    styles={{ margin: "30px 42px", width: "312px" }}
                    onClick={async () => await SubmitHandler(login, password, isLongSession)}
                >
                    Войти
                </Button>
            </form>
        </div>
    )
}
export default AuthorizationForm
