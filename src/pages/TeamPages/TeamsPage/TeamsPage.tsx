import TeamView from "@/shared/UI/TeamView/TeamView"
import { TeamService } from "@/entities/Team/services/TeamService"
import { FC } from "react"
import EmptyTag from "@/shared/UI/EmptyTag/EmptyTag"
import classes from "./teamsPage.module.css"
import TeamPageControls from "@/pages/TeamPages/TeamsPage/UI/TeamPageControls/TeamPageControls"
import CreateTeam from "@/pages/TeamPages/TeamsPage/UI/CreateTeam/CreateTeam"

interface ITeamsPageProps {
    searchParams: {
        page: number
    }
}

const TeamsPage: FC<ITeamsPageProps> = async ({searchParams: {page}}) => {

    const getTeamsResult = await TeamService.getAllTeamsAsync(page)

    if (getTeamsResult.hasError()) {
        return <EmptyTag>{getTeamsResult.getError().errorMessage}</EmptyTag>
    }

    const teams = getTeamsResult.unwrap()

    return (
        <div className={classes.wrapper}>
            <CreateTeam/>
            <div className={classes.teams}>
                {teams.map(t => (
                    <TeamView
                        key={t.id}
                        id={t.id}
                        name={t.name}
                        description={t.description}
                    />
                ))}
            </div>
            <TeamPageControls page={page}/>
        </div>
    )
}

export default TeamsPage