import classes from "./teamPage.module.css"
import { FC } from "react"
import { TeamService } from "@/entities/Team/services/TeamService"
import EmptyTag from "@/shared/UI/EmptyTag/EmptyTag"
import TeamInfo from "@/pages/TeamPages/TeamPage/UI/TeamInfo/TeamInfo"
import Members from "@/pages/TeamPages/TeamPage/UI/Members/Members"
import Books from "@/pages/TeamPages/TeamPage/UI/Books/Books"

interface ITeamPageProps {
    params: {
        teamId: number
    }
}

const TeamPage: FC<ITeamPageProps> = async ({params: {teamId}}) => {

    const getTeamResult = await TeamService.getTeamByIdAsync(teamId)

    if (getTeamResult.hasError()) {
        return <EmptyTag>{getTeamResult.getError().errorMessage}</EmptyTag>
    }

    const team = getTeamResult.unwrap()

    return (
        <div>
            <TeamInfo name={team.name} description={team.description}/>
            <div className={classes.info}>
                <Books/>
                <Members members={team.members}/>
            </div>
        </div>
    )
}

export default TeamPage