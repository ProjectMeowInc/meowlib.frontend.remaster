"use client"

import React from "react"
import BurgerMenu from "@/shared/UI/BurgerMenu/BurgerMenu"
import { useBurgerButton } from "@/shared/UI/BurgerButton/useBurgerButton"
import classes from "./burgetButton.module.css"

const BurgerButton = () => {
    const {isOpen, handleChangeStateClose} = useBurgerButton()

    return (
        <div className={classes.wrapper}>
            <img src={"/img/view-list.png"} alt={"logo"} onClick={handleChangeStateClose} />
            <BurgerMenu isActive={isOpen} onClose={handleChangeStateClose} />
        </div>
    )
}

export default BurgerButton
