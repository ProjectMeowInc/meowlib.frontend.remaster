import React from "react"
import classes from "./Header.module.css"
import MenuBurger from "@/shared/UI/MenuBurger/MenuBurger";
import logo from "@/public/img/Logo.svg"
import Image from "next/image"

const Header = () => {
    return (
        <div className={classes.header}>
            <Image src={logo} alt={"lol"} width={250} height={90}/>
            <MenuBurger/>
            <div className={classes.profile_info}>
                <img src={"/img/Rectangle 106.png"} alt={""} />
                <p>asdsadsad</p>
            </div>
        </div>
    )
}

export default Header
