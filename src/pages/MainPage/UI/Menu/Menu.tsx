import React from "react"
import classes from "./Menu.module.css"
import MenuItem from "@/pages/MainPage/UI/MenuItem/MenuItem"

const Menu = () => {
    return (
        <aside className={classes.aside}>
            <div className={classes.top_part}>
                <MenuItem img={"/img/icon.png"} text={"Главная"} href={"/"} />

                <MenuItem img={"/img/6.png"} text={"Избранное"} href={""} />

                <MenuItem img={"/img/7.png"} text={"Админ панель"} href={"/admin"} />

                <MenuItem img={""} text={"FAQ"} href={"/rules"}/>
            </div>

            <div className={classes.bottom_part}>
                <MenuItem img={"/img/8.png"} text={"Настройки"} href={""} />

                <MenuItem img={"/img/9.png"} text={"Выйти"} href={""} />
            </div>
        </aside>
    )
}

export default Menu
