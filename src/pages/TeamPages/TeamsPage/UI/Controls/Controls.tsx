import React, { FC } from "react"
import Link from "next/link"
import classes from "./controls.module.css"
import EmptyTag from "@/shared/UI/EmptyTag/EmptyTag"

interface IControlsProps {
    page: string
}

const Controls: FC<IControlsProps> = ({page}) => {
    return (
        <div className={classes.wrapper}>
            {Number(page) > 1 ?
                <Link className={classes.control} href={`/teams/?page=${Number(page) - 1}`}>
                    Предыдущая
                </Link>
                : <EmptyTag/>}
            <Link className={classes.control} href={`/teams/?page=${Number(page) + 1}`}>
                Следующая
            </Link>
        </div>
    )
}

export default Controls