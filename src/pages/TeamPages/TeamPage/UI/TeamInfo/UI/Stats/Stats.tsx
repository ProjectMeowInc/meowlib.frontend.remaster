import classes from "./stats.module.css"
import { FC } from "react"

interface IStatsProps {
    likes: number
    titles: number
    chapters: number
}

const Stats: FC<IStatsProps> = ({likes, chapters, titles}) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.item}>
                <p className={classes.count}>{likes}</p>
                <p className={classes.description}>Лайков</p>
            </div>

            <div className={classes.item}>
                <p className={classes.count}>{titles}</p>
                <p className={classes.description}>Тайтлов</p>
            </div>

            <div className={classes.item}>
                <p className={classes.count}>{chapters}</p>
                <p className={classes.description}>Глав</p>
            </div>
        </div>
    )
}

export default Stats