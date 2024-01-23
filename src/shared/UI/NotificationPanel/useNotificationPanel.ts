import { useFirstLoadingAsync } from "@/shared/hooks/useFirstLoadingAsync"
import { useState } from "react"
import { NotificationEntity } from "@/entities/Notification/NotificationEntity"
import { NotificationService } from "@/entities/Notification/services/NotificationService"
import { AlertService } from "@/shared/services/AlertService"

export const useNotificationPanel = () => {

    const [notifications, setNotifications] = useState<NotificationEntity[] | null>(null)

    useFirstLoadingAsync( async () => {
        NotificationService.getAllNotifications().then(getNotificationResult => {
            if (getNotificationResult.hasError()) {
                return AlertService.errorMessage(getNotificationResult.getError().errorMessage)
            }

            setNotifications(getNotificationResult.unwrap())
        })
    })

    return {
        notifications
    }
}