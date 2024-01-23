import { useFirstLoadingAsync } from "@/shared/hooks/useFirstLoadingAsync"
import { ReactNode, useState } from "react"
import { NotificationEntity } from "@/entities/Notification/NotificationEntity"
import { NotificationService } from "@/entities/Notification/services/NotificationService"
import { AlertService } from "@/shared/services/AlertService"
import { jwtDecode } from "jwt-decode"
import { NotificationTeamInvitePayload } from "@/entities/Notification/types/NotificationTeamInvitePayload"
import { TeamService } from "@/entities/Team/services/TeamService"

export const useNotificationPanel = () => {

    const [notifications, setNotifications] = useState<NotificationEntity[] | null>(null)
    const [teamName, setTeamName] = useState<string>("")

    useFirstLoadingAsync( async () => {
        NotificationService.getAllNotifications().then(getNotificationResult => {
            if (getNotificationResult.hasError()) {
                return AlertService.errorMessage(getNotificationResult.getError().errorMessage)
            }

            setNotifications(getNotificationResult.unwrap())
        })
    })

    const getTitle = (type: string, payload: string): ReactNode => {
        switch (type) {
            case "TeamInvite" :
                const {teamId} = jwtDecode<NotificationTeamInvitePayload>(payload)

                TeamService.getTeamByIdAsync(teamId).then(result => {
                    if (result.hasError()) {
                        return AlertService.errorMessage(result.getError().errorMessage)
                    }

                    const team = result.unwrap()

                    setTeamName(team.name)
                })

                return <p>Приглашение в команду <b>{teamName}</b></p>
            case "NewBookChapter" :
                return "Вышла новая глава"
            default :
                return "Приглашение в команду"
        }
    }

    return {
        notifications,
        getTitle
    }
}