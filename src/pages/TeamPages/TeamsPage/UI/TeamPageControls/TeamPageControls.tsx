import React, { FC } from "react"
import Link from "next/link"
import classes from "./teamPageControls.module.css"
import EmptyTag from "@/shared/UI/EmptyTag/EmptyTag"

interface ITeamPageControlsProps {
    page: number
}

const TeamPageControls: FC<ITeamPageControlsProps> = ({page}) => {
    return (
        <div className={classes.wrapper}>
            {Number(page) > 1 ?
                <Link className={classes.control} href={`/teams/?page=${page - 1}`}>
                    Предыдущая
                </Link>
                : <EmptyTag/>}
            <Link className={classes.control} href={`/teams/?page=${page + 1}`}>
                Следующая
            </Link>
        </div>
    )
}

export default TeamPageControls