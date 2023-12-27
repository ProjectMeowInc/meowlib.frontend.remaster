import React, { FC, PropsWithChildren } from "react"
import Link from "next/link"
import classes from "./mainAdminPage.module.css"

export interface IMainAdminPageListItemProps {
    href: string
}

const MainAdminPageListItem: FC<PropsWithChildren<IMainAdminPageListItemProps>> = ({children, href}) => {
    return (
        <Link className={classes.link} href={href}>
            {children}
        </Link>
    )
}

export default MainAdminPageListItem