import { NotificationType } from "@/entities/Notification/types/NotificationType"

export interface NotificationEntity {
    id: number
    type: NotificationType
    payload: string
    createdAt: Date
}