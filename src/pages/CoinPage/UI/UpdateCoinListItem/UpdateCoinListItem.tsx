import React, { FC } from "react"
import classes from "./updateCoinListItem.module.css"
import { CoinReason, getCoinReason } from "@/entities/Coin/models/CoinReasons"
import { useUpdateCoinListItem } from "@/pages/CoinPage/UI/UpdateCoinListItem/useUpdateCoinListItem"

interface IUpdateCoinListItemProps {
    id: number
    value: number
    reason: CoinReason
    date: string
}

const UpdateCoinListItem: FC<IUpdateCoinListItemProps> = ({ value, reason, date }) => {
    const { getTime } = useUpdateCoinListItem()

    return (
        <div className={classes.container}>
            <img src={"/img/icons/coin.png"} alt={''}/>
            <p className={classes.info}>
                Начисление +{value} MeowCoin за {getCoinReason(reason)}
            </p>
            <p className={classes.date}>{getTime(date)}</p>
        </div>
    )
}

export default UpdateCoinListItem
