import React from "react";
import classes from "./root.module.css"

export const metadata = {
  title: 'Meow Lib',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={classes.app_body}>{children}</body>
    </html>
  )
}
