import React from "react"
import classes from "./MenuItem.module.css"
import Link from "next/link"

interface IMenuItemProps {
    img: string
    text: string
    href: string
}

const MenuItem: React.FC<IMenuItemProps> = ({ img, text, href }) => {
    return (
        <Link className={classes.container} href={href}>
            <img src={img} alt={""} />
            <p>{text}</p>
            <img src={"/img/5.png"} alt={""} />
        </Link>
    )
}

export default MenuItem
