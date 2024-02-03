"use client"

import classes from "./burgerMenuItem.module.css"
import { FC } from "react"
import Link from "next/link"

interface IBurgerMenuItemProps {
    href: string
    imageHref: string
    text: string
}

const BurgerMenuItem: FC<IBurgerMenuItemProps> = ({ href, imageHref, text }) => {
    return (
        <Link href={href} className={classes.menu_item}>
            <img src={imageHref} alt={""}/>
            {text}
        </Link>
    )
}

export default BurgerMenuItem
