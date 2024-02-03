import classes from "./notificationItem.module.css"
import { FC, ReactNode } from "react"
import { useNotificationItem } from "@/shared/UI/NotificationItem/useNotificationItem"
import { NotificationType } from "@/entities/Notification/types/NotificationType"

interface INotificationItemProps {
    id: number
    title: ReactNode
    type: NotificationType
    payload: string
}

const NotificationItem: FC<INotificationItemProps> = ({title, id, payload, type}) => {
    const {getButton} = useNotificationItem(id, payload, type)

    return (
        <div className={classes.wrapper}>
            <div className={classes.title}>{title}</div>
            {getButton()}
        </div>
    )
}

export default NotificationItem