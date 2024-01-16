import classes from "./headerItem.module.css"
import { FC } from "react"

interface IMenuItemProps {
    text: string
    href: string
}

const HeaderItem: FC<IMenuItemProps> = ({ text, href }) => {
    return (
        <a className={classes.menu_item} href={href}>
            {text}
        </a>
    )
}

export default HeaderItem
