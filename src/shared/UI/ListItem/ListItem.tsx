import Link from "next/link"
import { FC } from "react"
import classes from "./listItem.module.css"

interface IListItemProps {
    text: string
    href: string
}

const ListItem: FC<IListItemProps> = ({text, href}) => {
    return (
        <Link className={classes.link} href={href}>
            {text}
        </Link>
    )
}

export default ListItem