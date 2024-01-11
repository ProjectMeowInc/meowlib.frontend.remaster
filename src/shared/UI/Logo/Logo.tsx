import classes from "./logo.module.css"
import logo from "@/public/img/LogoImage.svg"
import Image from "next/image"
import React, { FC } from "react"

interface ILogoProps {
    className?: string
}

const Logo: FC<ILogoProps> = ({ className }) => {
    return (
        <div className={`${classes.logo} ${className}`}>
            <Image src={logo} alt={"logo"} />
            <span className={classes.logo_text}>Meow Lib</span>
        </div>
    )
}

export default Logo
