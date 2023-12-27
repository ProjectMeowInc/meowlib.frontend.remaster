import React from "react";
import classes from "./root.module.css"
import RootProvider from "@/shared/providers/RootProvider"

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
    <html lang="en">
      <body className={classes.app_body}>
        <RootProvider>
          {children}
        </RootProvider>
      </body>
    </html>
  )
}
