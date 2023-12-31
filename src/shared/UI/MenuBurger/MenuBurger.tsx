"use client"

import React, { useState } from "react"
import Menu from "@/pages/MainPage/UI/Menu/Menu"

const MenuBurger = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleClick = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <div>
            <img src={"/img/view-list.png"} alt={"logo"} onClick={handleClick} />
            {isOpen && <Menu />}
        </div>
    )
}

export default MenuBurger
