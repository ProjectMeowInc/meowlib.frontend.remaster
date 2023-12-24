"use client"

import Link from "next/link"
import { FC } from "react"
import { usePathname } from "next/navigation"
import classes from "./adminCreateButton.module.css"

interface IAdminCreateButtonProps {
    text: string
    href: string
}

const AdminCreateButton: FC<IAdminCreateButtonProps> = ({text, href}) => {

    const pathname = usePathname()

    return (
        <Link className={classes.button} href={pathname + href}>
            {text}
        </Link>
    )
}

export default AdminCreateButton