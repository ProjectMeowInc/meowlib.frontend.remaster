import classes from "./teamPage.module.css"
import { FC } from "react"
import { TeamService } from "@/entities/Team/services/TeamService"
import EmptyTag from "@/shared/UI/EmptyTag/EmptyTag"
import TeamInfoBlock from "@/pages/TeamPages/TeamPage/UI/TeamInfoBlock/TeamInfoBlock"
import MemberList from "@/pages/TeamPages/TeamPage/UI/MemberList/MemberList"
import BooksList from "@/pages/TeamPages/TeamPage/UI/BookList/BooksList"

interface ITeamPageProps {
    params: {
        teamId: number
    }
}

const TeamPage: FC<ITeamPageProps> = async ({ params: { teamId } }) => {
    const getTeamResult = await TeamService.getTeamByIdAsync(teamId)

    if (getTeamResult.hasError()) {
        return <EmptyTag>{getTeamResult.getError().errorMessage}</EmptyTag>
    }

    const team = getTeamResult.unwrap()

    return (
        <div>
            <TeamInfoBlock name={team.name} description={team.description} />
            <div className={classes.info}>
                <BooksList teamId={teamId} />
                <MemberList teamId={team.id} members={team.members} />
            </div>
        </div>
    )
}

export default TeamPage
