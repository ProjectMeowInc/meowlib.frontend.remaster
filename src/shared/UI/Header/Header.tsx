"use client"

import React from "react"
import classes from "./Header.module.css"
import BurgerButton from "@/shared/UI/BurgerButton/BurgerButton"
import Logo from "@/shared/UI/Logo/Logo"
import HeaderItem from "@/shared/UI/HeaderItem/HeaderItem"
import Button from "@/shared/UI/button/Button"
import { useRouter } from "next/navigation"

const Header = () => {

    const router = useRouter()

    return (
        <div className={classes.header}>
            <div className={classes.left_side}>
                <Logo />
                <HeaderItem text={"Каталог"} href={"catalog"} />
                <HeaderItem text={"Поиск"} href={"search"} />
            </div>

            <div className={classes.wrapper}>
                <Button onClick={() => router.push("/auth")}>
                    Войти
                </Button>
            </div>
            <BurgerButton />
        </div>
    )
}

export default Header
