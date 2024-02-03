"use client"

import React, { useState } from "react"
import classes from "./Header.module.css"
import BurgerButton from "@/shared/UI/BurgerButton/BurgerButton"
import Logo from "@/shared/UI/Logo/Logo"
import HeaderItem from "@/shared/UI/HeaderItem/HeaderItem"
import Button from "@/shared/UI/button/Button"
import { useRouter } from "next/navigation"
import NotificationPanel from "@/shared/UI/NotificationPanel/NotificationPanel"
import Image from "next/image"

import bell from "@/public/img/icons/bell.svg"

const Header = () => {

    const router = useRouter()
    const [isNotificationPanelActive, setIsNotificationPanelActive] = useState<boolean>(false)

    return (
        <div className={classes.header}>
            <div className={classes.left_side}>
                <Logo />
                <HeaderItem text={"Каталог"} href={"catalog"} />
                <HeaderItem text={"Поиск"} href={"search"} />
                <HeaderItem text={"Команды"} href={"teams?page=1"}/>
            </div>

            <div className={classes.wrapper}>
                <div onClick={() => setIsNotificationPanelActive(prevState => !prevState)} className={isNotificationPanelActive ? classes.bell_active : classes.bell}>
                    <Image src={bell} alt={"bell"}/>
                </div>
                {isNotificationPanelActive && <NotificationPanel/>}

                <Button onClick={() => router.push("/auth")}>
                    Войти
                </Button>
            </div>
            <BurgerButton />
        </div>
    )
}

export default Header
