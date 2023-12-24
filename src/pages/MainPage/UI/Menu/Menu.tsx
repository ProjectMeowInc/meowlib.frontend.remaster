import React from "react"
import classes from "./Menu.module.css"
import MenuItem from "@/pages/MainPage/UI/MenuItem/MenuItem"

const Menu = () => {
    return (
        <aside className={classes.container}>
            <div className={classes.top_part}>
                <MenuItem img={"/img/icon.png"} text={"Главная"} />

                <MenuItem img={"/img/6.png"} text={"Избранное"} />

                <MenuItem img={"/img/7.png"} text={"Админ панель"} />
            </div>

            <div className={classes.bottom_part}>
                <MenuItem img={"/img/8.png"} text={"Настройки"} />

                <MenuItem img={"/img/9.png"} text={"Выйти"} />
            </div>
        </aside>
    )
}

export default Menu
