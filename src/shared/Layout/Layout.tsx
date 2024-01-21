import React, { PropsWithChildren } from "react"
import Header from "@/shared/UI/Header/Header"
import classes from "./Layout.module.css"

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={classes.container}>
            <Header />
            <div className={classes.wrapper}>
                {children}
            </div>
        </div>
    )
}

export default Layout
