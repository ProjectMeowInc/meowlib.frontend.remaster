"use client"

import React from "react"
import { useUpdateCoinList } from "@/pages/CoinPage/UI/UpdateCoinList/useUpdateCoinList"
import Preloader from "@/pages/admin/UI/Preloader/Preloader"
import UpdateCoinListItem from "@/pages/CoinPage/UI/UpdateCoinListItem/UpdateCoinListItem"
import classes from "./updateCoinList.module.css"

const UpdateCoinList = () => {
    const { coins } = useUpdateCoinList()

    if (!coins) {
        return <Preloader />
    }

    return (
        <div>
            {coins.map((coin, index) => (
                <div key={coin.id}>
                    <UpdateCoinListItem
                        id={coin.id}
                        key={coin.id}
                        value={coin.value}
                        reason={coin.reason}
                        date={coin.date}
                    />
                    {index < coins.length - 1 && <hr className={classes.line} />}
                </div>
            ))}
        </div>
    )
}

export default UpdateCoinList
