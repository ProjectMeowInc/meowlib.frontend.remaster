import React, { useState } from "react"
import Button from "@/shared/UI/button/Button"
import classes from "@/shared/UI/CookieNotification/CookieNotification.module.css"
import Image from "next/image"
import { useCookies } from "react-cookie"
import { useFirstLoading } from "@/shared/hooks/useFirstLoading"

const CookieNotification = () => {
    const [cookies, setCookie] = useCookies(["notificationShown"])
    const [showNotification, setShowNotification] = useState(true)

    useFirstLoading(() => {
        if (!cookies.notificationShown) {
            setShowNotification(true)
        }
    })

    const closeNotificationSetCook = () => {
        setCookie("notificationShown", true)
        setShowNotification(false)
    }

    return (
        showNotification && (
            <div className={classes.container__cookie_notification}>
                <Image src={"/img/2.jpg"} alt={""} width={140} height={140} />
                <div>
                    <p>
                        Этот сайт использует файлы cookie для хранения данных. Продолжая использовать этот сайт, вы
                        даете согласие на использование этих данных.
                    </p>
                    <Button onClick={closeNotificationSetCook} styles={{ width: "380px" }}>
                        Хорошо, принимаю
                    </Button>
                </div>
            </div>
        )
    )
}

export default CookieNotification
