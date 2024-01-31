import { TeamRoleType } from "@/entities/Team/types/TeamRoleType"
import { useState } from "react"
import { TokenService } from "@/shared/services/TokenService"
import { useFirstLoading } from "@/shared/hooks/useFirstLoading"

interface IUseMembersProps {
    id: number
    login: string
    role: TeamRoleType
}

export const useMembers = (members: IUseMembersProps[]) => {

    const [userIsAdmin, setUserIsAdmin] = useState<boolean>(false)
    const [modalIsActive, setModalIsActive] = useState<boolean>(false)
    const [isUserInTeam, setIsUserInTeam] = useState<boolean>(false)

    useFirstLoading(() => {
        const userToken = TokenService.getAccessToken()

        if (!userToken) {
            return
        }

        const parsedToken = TokenService.parseAccessToken(userToken)

        if (parsedToken.hasError()) {
            return
        }

        const user = parsedToken.unwrap()

        members.find(u => {
            if (u.id === user.id && u.role === "Admin") {
                setUserIsAdmin(true)
            }

            if (u.id === user.id) {
                setIsUserInTeam(true)
            }
        })
    })

    return {
        userIsAdmin,
        modalIsActive,
        setModalIsActive,
        isUserInTeam
    }
}