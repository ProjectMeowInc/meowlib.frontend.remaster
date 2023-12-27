import React from "react"
import classes from "./Header.module.css"
import MenuBurger from "@/shared/UI/MenuBurger/MenuBurger";

const Header = () => {
    return (
        <div className={classes.header}>
            <img src={"/img/Logo black 2.png"} alt={""} />
            <MenuBurger/>
            <div className={classes.profile_info}>
                <img src={"/img/Rectangle 106.png"} alt={""} />
                <p>asdsadsad</p>
            </div>
        </div>
    )
}

export default Header
