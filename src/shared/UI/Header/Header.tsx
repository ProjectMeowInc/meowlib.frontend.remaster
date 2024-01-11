import React from "react"
import classes from "./Header.module.css"
import BurgerButton from "@/shared/UI/BurgerButton/BurgerButton"
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
