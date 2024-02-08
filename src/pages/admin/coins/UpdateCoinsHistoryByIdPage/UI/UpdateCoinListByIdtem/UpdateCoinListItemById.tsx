import React, { FC } from "react"
import classes from "./updateCoinListItemById.module.css"
import { CoinReason, getCoinReason } from "@/entities/Coin/models/CoinReasons"
import { useUpdateCoinListItemById } from "@/pages/admin/coins/UpdateCoinsHistoryByIdPage/UI/UpdateCoinListByIdtem/useUpdateCoinListItemById"

interface IUpdateCoinListItemProps {
    id: number
    value: number
    reason: CoinReason
    date: string
}

const UpdateCoinListItemById: FC<IUpdateCoinListItemProps> = ({ value, reason, date }) => {
    const { getTime } = useUpdateCoinListItemById()

    return (
        <div className={classes.container}>
            <img src={"/img/icons/coin.png"} alt={""} />
            <p className={classes.info}>
                Начисление +{value} MeowCoin {getCoinReason(reason)}
            </p>
            <p className={classes.date}>{getTime(date)}</p>
        </div>
    )
}

export default UpdateCoinListItemById
