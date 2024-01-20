import { Result } from "@/shared/services/Result/Result"
import { NotificationEntity } from "@/entities/Notification/NotificationEntity"
import { NotificationApi } from "@/entities/Notification/api/NotificationApi"
import { EmptyResult } from "@/shared/services/Result/EmptyResult"

export class NotificationService {
    static async getAllNotifications(): Promise<Result<NotificationEntity[]>> {
        const result = await NotificationApi.getAllNotifications()

        if (result.hasError()) {
            return Result.withError(result.getError())
        }

        return Result.withOk(result.unwrap().items)
    }

    static async markReadNotificationAsync(notificationId: number): Promise<EmptyResult> {
        return await NotificationApi.markReadNotificationAsync(notificationId)
    }
}