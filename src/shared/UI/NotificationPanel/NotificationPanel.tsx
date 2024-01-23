"use client"

import classes from "./notificationPanel.module.css"
import { useNotificationPanel } from "@/shared/UI/NotificationPanel/useNotificationPanel"
import Preloader from "@/pages/admin/UI/Preloader/Preloader"
import NotificationItem from "@/shared/UI/NotificationItem/NotificationItem"

const NotificationPanel = () => {

    const {notifications} = useNotificationPanel()

    // if (!notifications) {
    //     return <Preloader/>
    // }

    return (
        <div className={classes.wrapper}>
            <NotificationItem/>
        </div>
    )
}

export default NotificationPanel