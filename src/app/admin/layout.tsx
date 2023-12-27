import React, { FC, PropsWithChildren } from "react"
import RootProvider from "@/shared/providers/RootProvider"

const Layout: FC<PropsWithChildren> = ({children}) => {
    return (
        <html>
            <body>
            <RootProvider>
                {children}
            </RootProvider>
            </body>
        </html>
    )
}

export default Layout