"use client"

import React, { useState } from "react"
import classes from "./Header.module.css"
import BurgerButton from "@/shared/UI/BurgerButton/BurgerButton"
import Logo from "@/shared/UI/Logo/Logo"
import HeaderItem from "@/shared/UI/HeaderItem/HeaderItem"
import Button from "@/shared/UI/button/Button"
import { useRouter } from "next/navigation"
import NotificationPanel from "@/shared/UI/NotificationPanel/NotificationPanel"

const Header = () => {

    const router = useRouter()
    const [isNotificationPanelActive, setIsNotificationPanelActive] = useState<boolean>(true)

    return (
        <div className={classes.header}>
            <div className={classes.left_side}>
                <Logo />
                <HeaderItem text={"Каталог"} href={"catalog"} />
                <HeaderItem text={"Поиск"} href={"search"} />
                {isNotificationPanelActive && <NotificationPanel/>}
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
