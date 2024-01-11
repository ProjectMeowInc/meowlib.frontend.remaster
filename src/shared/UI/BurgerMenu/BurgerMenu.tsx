import React, { FC } from "react"
import classes from "./burgerMenu.module.css"
import BurgerMenuItem from "@/shared/UI/BurgerMenuItem/BurgerMenuItem"
import arrowLeft from "@/public/img/icons/arrow-left.svg"
import Image from "next/image"

interface IBurgerMenuProps {
    onClose: () => void
    isActive: boolean
}

const BurgerMenu: FC<IBurgerMenuProps> = ({ onClose, isActive }) => {
    const containerClassName = `${classes.container} ` + (isActive ? classes.active : "")

    return (
        <div className={containerClassName}>
            <div className={classes.menu_header} onClick={onClose}>
                <Image src={arrowLeft} alt={"arrow"} height={35} />
                <span className={classes.header_text}>Закрыть меню</span>
            </div>
            <div className={classes.menu_items}>
                <div className={classes.items_group}>
                    <div className={classes.group_name}>Аккаунт</div>
                    <div className={classes.group_items}>
                        <BurgerMenuItem href={"my"} text={"Профиль"} imageHref={"NONE"} />
                    </div>
                </div>
                <div className={classes.items_group}>
                    <div className={classes.group_name}>Админ-панель</div>
                    <div className={classes.group_items}>
                        <BurgerMenuItem href={"admin"} text={"Админ-панель"} imageHref={"NONE"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BurgerMenu
