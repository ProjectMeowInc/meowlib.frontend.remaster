import { NotificationType } from "@/entities/Notification/types/NotificationType"

export interface IGetAllNotificationsResponse {
    items: {
        id: number
        type: NotificationType
        payload: string
        createdAt: Date
    }[]
    count: number
}