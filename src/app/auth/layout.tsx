import RootProvider from "@/shared/providers/RootProvider"
import React from "react"

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
            <body>
                <RootProvider>{children}</RootProvider>
            </body>
        </html>
    )
}
