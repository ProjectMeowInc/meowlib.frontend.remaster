"use client"

import React from "react"
import classes from "@/pages/AuthPage/UI/NavAuth/NavAuth.module.css"
import Image from "next/image"
import RegistrationForm from "@/pages/AuthPage/UI/RegistrationForm/RegistrationForm"
import AuthorizationForm from "@/pages/AuthPage/UI/AuthorizationForm/AuthorizationForm"
import { useNavAuth } from "@/pages/AuthPage/UI/NavAuth/useNavAuth"

const NavAuth = () => {
    const { isRegPage, setIsRegPage } = useNavAuth()

    return (
        <div className={classes.container__nav_auth}>
            <Image src={"/img/homeIcon.png"} alt={""} width={20} height={20} className={classes.nav_auth__img} />
            <p onClick={() => setIsRegPage(false)} className={isRegPage ? classes.none_active : classes.active}>
                Вход
            </p>
            <p onClick={() => setIsRegPage(true)} className={!isRegPage ? classes.none_active : classes.active}>
                Регистрация
            </p>

            {isRegPage ? <RegistrationForm /> : <AuthorizationForm />}

            <hr className={classes.nav_auth__hr} />
        </div>
    )
}

export default NavAuth
