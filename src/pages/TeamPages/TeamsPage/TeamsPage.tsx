import TeamView from "@/shared/UI/TeamView/TeamView"
import { TeamService } from "@/entities/Team/services/TeamService"
import { FC } from "react"
import EmptyTag from "@/shared/UI/EmptyTag/EmptyTag"
import classes from "./teamsPage.module.css"
import Controls from "@/pages/TeamPages/TeamsPage/UI/Controls/Controls"

interface ITeamsPageProps {
    searchParams: {
        page: string
    }
}

const TeamsPage: FC<ITeamsPageProps> = async ({searchParams: {page}}) => {

    const getTeamsResult = await TeamService.getAllTeamsAsync(Number(page))

    if (getTeamsResult.hasError()) {
        return <EmptyTag>{getTeamsResult.getError().errorMessage}</EmptyTag>
    }

    const teams = getTeamsResult.unwrap()

    return (
        <div className={classes.wrapper}>
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
            <Controls page={Number(page)}/>
        </div>
    )
}

export default TeamsPage