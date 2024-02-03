import { FC } from "react"
import classes from "./teamView.module.css"
import StatItem from "@/shared/UI/TeamView/UI/StatItem/StatItem"

import people from "@/public/img/icons/user-group.png"
import heart from "@/public/img/icons/heart.png"
import collections from "@/public/img/icons/collection.png"
import Link from "next/link"

interface ITeamViewProps {
    id: number
    name: string
    description: string
}

const TeamView: FC<ITeamViewProps> = ({id, name, description}) => {
    return (
        <Link href={`/teams/${id}`} className={classes.wrapper}>
            <div className={classes.img}>

            </div>
            <div className={classes.text}>
                <p className={classes.caption}>{name}</p>
                <p>{description}</p>

                <div className={classes.stats}>
                    <StatItem count={0} image={people} />
                    <StatItem count={0} image={heart} />
                    <StatItem count={0} image={collections} />
                </div>
            </div>
        </Link>
    )
}

export default TeamView