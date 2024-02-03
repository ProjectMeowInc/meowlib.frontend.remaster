import { FC } from "react"
import Image from "next/image"
import classes from "./teamInfo.module.css"

import defaultImage from "@/public/img/defaultImage.png"
import TeamStats from "@/pages/TeamPages/TeamPage/UI/TeamInfoBlock/UI/TeamStats/TeamStats"

interface ITeamInfoBlockProps {
    name: string
    description: string
}

const TeamInfoBlock: FC<ITeamInfoBlockProps> = ({name, description}) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.background}>

            </div>
            <div className={classes.team_info}>
                <Image className={classes.team_image} src={defaultImage} alt={"team-cover"} width={300} height={300}/>
                <div className={classes.info}>
                    <h1 className={classes.caption}>{name}</h1>
                    <TeamStats chapters={0} likes={0} titles={0}/>
                    <p className={classes.description}>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default TeamInfoBlock