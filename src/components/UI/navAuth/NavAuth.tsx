import React from 'react';

import classes from "@/components/UI/NavAuth/NavAuth.module.css";
import Image from "next/image";

const NavAuth = () => {
    return (
            <div className={classes.container__nav_auth}>
               <Image src={'/img/homeIcon.png'}
                      alt={''}
                      width={20}
                      height={20}
                      className={classes.nav_auth__img}
               />
                <p>Вход</p>
                <p>Регистрация</p>
                <hr/>
            </div>
    );
};

export default NavAuth;