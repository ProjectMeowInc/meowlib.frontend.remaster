import React, { PropsWithChildren } from "react"
import Header from "@/shared/UI/Header/Header"
import classes from "./Layout.module.css"

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={classes.container}>
            <Header />
            {children}
        </div>
    )
}

export default Layout
