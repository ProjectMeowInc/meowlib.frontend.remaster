import { Result } from "@/shared/services/Result/Result"
import { IGetAllNotificationsResponse } from "@/entities/Notification/models/responses/IGetAllNotificationsResponse"
import { HTTPRequest } from "@/shared/services/HTTPResult/HTTPRequest"
import { EmptyResult } from "@/shared/services/Result/EmptyResult"

export class NotificationApi {
    static async getAllNotifications(): Promise<Result<IGetAllNotificationsResponse>> {
        const result = await new HTTPRequest<IGetAllNotificationsResponse>()
            .withUrl("/v1/notifications/my")
            .withGetMethod()
            .withAuth()
            .sendAsync()

        if (result.hasError()) {
            return Result.withError(result.getError())
        }

        return Result.withOk(result.unwrap())
    }

    static async markReadNotificationAsync(notificationId: number): Promise<EmptyResult> {
        const result = await new HTTPRequest<void>()
            .withUrl(`/v1/notifications/my/watch/${notificationId}`)
            .withPostMethod()
            .withAuth()
            .sendAsync()

        if (result.hasError()) {
            return EmptyResult.withError(result.getError())
        }

        return EmptyResult.withOk()
    }
}