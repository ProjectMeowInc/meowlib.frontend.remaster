import classes from "./burgerMenuItem.module.css"
import { FC } from "react"

interface IBurgerMenuItemProps {
    href: string
    imageHref: string
    text: string
}

const BurgerMenuItem: FC<IBurgerMenuItemProps> = ({ href, imageHref, text }) => {
    return (
        <a className={classes.menu_item} href={href}>
            <img src={imageHref} />
            {text}
        </a>
    )
}

export default BurgerMenuItem
