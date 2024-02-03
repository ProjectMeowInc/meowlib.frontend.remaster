import { ReactNode } from "react"
import { NotificationType } from "@/entities/Notification/types/NotificationType"
import classes from "@/shared/UI/NotificationItem/notificationItem.module.css"
import NotificationButton from "@/shared/UI/NotificationItem/UI/NotificationButton/NotificationButton"
import check from "@/public/img/icons/check.svg"
import trash from "@/public/img/icons/trash.svg"
import { NotificationService } from "@/entities/Notification/services/NotificationService"
import { AlertService } from "@/shared/services/AlertService"
import { TeamService } from "@/entities/Team/services/TeamService"

export const useNotificationItem = (notificationId: number, payload: string, type: NotificationType) => {

    const getButton = (): ReactNode => {
        switch (type) {
            case "TeamInvite":

                return (
                    <div className={classes.buttons}>
                        <NotificationButton onClick={async () => await acceptTeamInvite(payload)} icon={check} />
                        <NotificationButton onClick={async () => await markReadNotification(notificationId)} icon={trash} />
                    </div>
                )
        }
    }

    const markReadNotification = async (notificationId: number) => {
        const result = await NotificationService.markReadNotificationAsync(notificationId)

        if (result.hasError()) {
            return AlertService.errorMessage(result.getError().errorMessage)
        }
    }

    const acceptTeamInvite = async (payload: string) => {
        const result = await TeamService.acceptTeamInviteAsync(payload)

        if (result.hasError()) {
            return AlertService.errorMessage(result.getError().errorMessage)
        }
    }

    return {
        getButton
    }
}