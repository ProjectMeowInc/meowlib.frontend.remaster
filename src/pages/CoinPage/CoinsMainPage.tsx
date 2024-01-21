import React from "react"
import classes from "./coinsMainPage.module.css"
import UpdateCoinList from "@/pages/CoinPage/UI/UpdateCoinList/UpdateCoinList";

const CoinsMainPage = () => {
    return (
        <div className={classes.container}>
            <UpdateCoinList/>
        </div>
    )
}

export default CoinsMainPage
