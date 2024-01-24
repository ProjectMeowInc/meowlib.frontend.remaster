"use client"

import React from "react"
import Preloader from "@/pages/admin/UI/Preloader/Preloader"
import UpdateCoinListItem from "@/pages/CoinPage/UI/UpdateCoinListItem/UpdateCoinListItem"
import classes from "./updateCoinList.module.css"
import useUpdateCoinList from "@/pages/CoinPage/UI/UpdateCoinList/useUpdateCoinList"

const UpdateCoinList: React.FC = () => {
    const { groupedCoins, getMonth } = useUpdateCoinList()

    if (!groupedCoins) {
        return <Preloader />
    }
    return (
        <div>
            {Object.entries(groupedCoins)
                .sort(([dateA], [dateB]) => new Date(dateB).getTime() - new Date(dateA).getTime())
                .map(([date, coinsGroup]) => (
                    <div key={date} className={classes.date_list}>
                        <div className={classes.date}>
                            <hr />
                            <div className={classes.circle}></div>
                            <h3>{new Date(date).toLocaleDateString(undefined, { day: "numeric" })}</h3>
                            <h3>{getMonth(date.split("-")[1])}</h3>
                        </div>
                        {coinsGroup.map((coin, index) =>
                            coin ? (
                                <div key={coin.id}>
                                    <UpdateCoinListItem
                                        id={coin.id}
                                        value={coin.value}
                                        reason={coin.reason}
                                        date={coin.date}
                                    />
                                    {index < coinsGroup.length - 1 && <hr className={classes.line} />}
                                </div>
                            ) : (
                                <p key={index}>Здесь пока ничего нет</p>
                            ),
                        )}
                    </div>
                ))}
            <hr className={classes.run} />
        </div>
    )
}

export default UpdateCoinList
