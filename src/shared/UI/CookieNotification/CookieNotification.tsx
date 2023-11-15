import React from 'react';
import Button from "@/shared/UI/button/Button";
import classes from "@/shared/UI/CookieNotification/CookieNotification.module.css"
import Image from "next/image";

const CookieNotification = () => {
    return (
        <div className={classes.container__cookie_notification}>
            <Image src={'/img/2.jpg'} alt={''} width={140} height={140}/>
            <span>
            <p>Этот сайт использует файлы cookie для хранения данных. Продолжая использовать этот сайт, вы даете согласие на использование этих данных.</p>
            <Button styles={{width:'380px'}}>Хорошо, принимаю</Button>
            </span>
        </div>
    );
};

export default CookieNotification;