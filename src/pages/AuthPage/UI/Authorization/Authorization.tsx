import React from "react"
import NavAuth from "@/pages/AuthPage/UI/NavAuth/NavAuth"
import classes from "./Authorization.module.css"

const Authorization = () => {
    return (
        <div className={classes.authorization}>
            <NavAuth />
        </div>
    )
}

export default Authorization
