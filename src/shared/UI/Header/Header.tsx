import React from "react"
import classes from "./Header.module.css"

const Header = () => {
    return (
        <header className={classes.container}>
            <img src={"/img/Logo black 2.png"} alt={""} />
            <div className={classes.profile_info}>
                <img src={"/img/Rectangle 106.png"} alt={""} />
                <p>aSd</p>
            </div>
        </header>
    )
}

export default Header
