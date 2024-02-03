"use client"

import classes from "./notificationPanel.module.css"
import NotificationItem from "@/shared/UI/NotificationItem/NotificationItem"
import { useNotificationPanel } from "@/shared/UI/NotificationPanel/useNotificationPanel"
import EmptyTag from "@/shared/UI/EmptyTag/EmptyTag"

const NotificationPanel = () => {

    const {notifications, getTitle} = useNotificationPanel()

    if (!notifications) {
        return <EmptyTag/>
    }

    return (
        <div className={classes.wrapper}>
            {notifications.map(n => (
                <NotificationItem key={n.id} id={n.id} type={n.type} title={getTitle(n.type, n.payload)} payload={n.payload}/>
            ))}
        </div>
    )
}

export default NotificationPanel