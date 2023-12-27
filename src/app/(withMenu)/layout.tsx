import "../globals.css"
import React from "react";
import Layout from "@/shared/Layout/Layout";

export const metadata = {
    title: 'Meow Lib',
    description: "Лучший сайт для чтения ранобэ",
    keywords: [
        "ранобэ",
        "читать",
        "читать ранобэ",
        "тома ранобэ",
        "ранобэ +на русском",
        "бесплатное ранобэ",
        "ранобэ читать онлайн",
        "читать ранобэ бесплатно",
        "ранобэ читать +на русском",
        "новелла +это",
        "новелла",
    ]
}


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="ru">
        <body>
            <Layout>
                {children}
            </Layout>
        </body>
        </html>
    )
}
