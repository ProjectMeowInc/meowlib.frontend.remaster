import React from "react"
import classes from "./Header.module.css"
import MenuBurger from "@/shared/UI/MenuBurger/MenuBurger";

const Header = () => {
    return (
        <header className={classes.container}>
            <img src={"/img/Logo black 2.png"} alt={""} />
            <MenuBurger/>
            <div className={classes.profile_info}>
                <img src={"/img/Rectangle 106.png"} alt={""} />
                <p>asdsadsad</p>
            </div>
        </header>
    )
}

export default Header
