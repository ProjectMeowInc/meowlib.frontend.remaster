import React, { FC } from "react"
import classes from "./updateCoinsHistoryByIdPage.module.css"
import UpdateCoinListById from "@/pages/admin/coins/UpdateCoinsHistoryByIdPage/UI/UpdateCoinListById/UpdateCoinListById"

interface IUpdateCoinsHistoryByIdPageProps {
    params: {
        userId: number
    }
}

const UpdateCoinsHistoryByIdPage: FC<IUpdateCoinsHistoryByIdPageProps> = ({ params }) => {
    const userId = params.userId

    return (
        <div className={classes.container}>
            <UpdateCoinListById userId={userId} />
        </div>
    )
}

export default UpdateCoinsHistoryByIdPage
