"use client"

import React, { useState } from "react"
import BurgerMenu from "@/shared/UI/BurgerMenu/BurgerMenu"

const BurgerButton = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true)

    const handleChangeStateClose = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <div>
            <img src={"/img/view-list.png"} alt={"logo"} onClick={handleChangeStateClose} />
            <BurgerMenu isActive={isOpen} onClose={handleChangeStateClose} />
        </div>
    )
}

export default BurgerButton
