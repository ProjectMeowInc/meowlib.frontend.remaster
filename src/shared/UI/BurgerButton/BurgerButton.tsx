"use client"

import React from "react"
import BurgerMenu from "@/shared/UI/BurgerMenu/BurgerMenu"
import { useBurgerButton } from "@/shared/UI/BurgerButton/useBurgerButton"

const BurgerButton = () => {
    const {isOpen, handleChangeStateClose} = useBurgerButton()

    return (
        <div>
            <img src={"/img/view-list.png"} alt={"logo"} onClick={handleChangeStateClose} />
            <BurgerMenu isActive={isOpen} onClose={handleChangeStateClose} />
        </div>
    )
}

export default BurgerButton
