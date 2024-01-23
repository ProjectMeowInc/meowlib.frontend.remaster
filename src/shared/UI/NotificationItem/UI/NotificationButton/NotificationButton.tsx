import classes from "./notificationButton.module.css"
import Image from "next/image"
import { FC } from "react"

interface INotificationButtonProps {
    icon: string
    onClick?: () => Promise<void>
}

const NotificationButton: FC<INotificationButtonProps> = ({icon, onClick}) => {
    return (
        <div className={classes.wrapper} onClick={onClick}>
            <Image src={icon} alt={"icon"}/>
        </div>
    )
}

export default NotificationButton