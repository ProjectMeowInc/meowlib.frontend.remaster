import React, { FC, PropsWithChildren } from "react"
import RootProvider from "@/shared/providers/RootProvider"

const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <html>
            <body style={{ margin: 0, padding: 0, boxSizing: "border-box" }}>
                <RootProvider>{children}</RootProvider>
            </body>
        </html>
    )
}

export default Layout
