import TeamPage from "@/pages/TeamPages/TeamPage/TeamPage"
import { Metadata } from "next"
import { TeamService } from "@/entities/Team/services/TeamService"

interface ITeamPageProps {
    params: {
        teamId: number
    }
}

export const generateMetadata = async ({params: {teamId}}: ITeamPageProps): Promise<Metadata> => {
    const getTeamsResult = await TeamService.getTeamByIdAsync(teamId)

    if (getTeamsResult.hasError()) {
        return {
            title: "MeowLib",
            description: "The best library of ranobe in the world",
        }
    }

    const team = getTeamsResult.unwrap()

    return {
        title: `Команда ${team.name}`,
        description: team.description,
        keywords: team.name
    }
}

export default TeamPage