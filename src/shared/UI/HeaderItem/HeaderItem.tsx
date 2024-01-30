import classes from "./headerItem.module.css"
import { FC } from "react"
import Link from "next/link"

interface IMenuItemProps {
    text: string
    href: string
}

const HeaderItem: FC<IMenuItemProps> = ({ text, href }) => {
    return (
        <Link className={classes.menu_item} href={href}>
            {text}
        </Link>
    )
}

export default HeaderItem
