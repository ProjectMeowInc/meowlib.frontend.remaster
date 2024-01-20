import React, { FC } from "react"
import classes from "./updateCoinListItem.module.css"
import { CoinReason } from "@/entities/Coin/models/CoinReasons"

interface IUpdateCoinListItemProps {
    id: number
    value: number
    reason: CoinReason
    date: string
}

const UpdateCoinListItem: FC<IUpdateCoinListItemProps> = ({ value, reason, date }) => {
    return (
        <div className={classes.container}>
            <img src={"/img/icons/coin.png"} />
            <p className={classes.info}>
                Начисление {value} MeowCoin за {reason}
            </p>
            <p className={classes.date}>{date}</p>
        </div>
    )
}

export default UpdateCoinListItem
