import React from "react"
import classes from "./Header.module.css"
import BurgerButton from "@/shared/UI/BurgerButton/BurgerButton"
import logo from "@/public/img/Logo.svg"
import Image from "next/image"
import Logo from "@/shared/UI/Logo/Logo"
import HeaderItem from "@/shared/UI/HeaderItem/HeaderItem"

const Header = () => {
    return (
        <div className={classes.header}>
            <Logo />
            <HeaderItem text={"Каталог"} href={"catalog"} />
            <HeaderItem text={"Поиск"} href={"search"} />
            <BurgerButton />
        </div>
    )
}

export default Header
