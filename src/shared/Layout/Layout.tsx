import React, { PropsWithChildren } from "react"
import Header from "@/shared/UI/Header/Header"
import Menu from "@/pages/MainPage/UI/Menu/Menu"
import classes from "./Layout.module.css"

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={classes.container}>
            <Header />
            <div className={classes.wrapper}>
                <Menu />
                {children}
            </div>
        </div>
    )
}

export default Layout
