import React from "react"
import classes from "./updateCoinListItem.module.css"

const UpdateCoinListItem = () => {
    return (
        <div className={classes.container}>
            <img src={"/img/icons/coin.png"} />
            <p className={classes.info}>Начисление +500 MeowCoin за пополение</p>
            <p className={classes.date}>12:12</p>
        </div>
    )
}

export default UpdateCoinListItem
