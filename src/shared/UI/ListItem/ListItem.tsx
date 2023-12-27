"use client"

import Link from "next/link"
import { FC } from "react"
import classes from "./listItem.module.css"
import { usePathname } from "next/navigation"

interface IListItemProps {
    id: number
    text: string
    href: string
    onDelete: (id: number) => Promise<void>
}

const ListItem: FC<IListItemProps> = ({ id, text, href, onDelete }) => {
    const pathname = usePathname()

    return (
        <div className={classes.link}>
            <div className={classes.link__wrapper}>
                <Link className={classes.link_text} href={pathname + href}>
                    {text}
                </Link>
                <p className={classes.delete_btn} onClick={async () => await onDelete(id)}>
                    Удалить
                </p>
            </div>
        </div>
    )
}

export default ListItem
