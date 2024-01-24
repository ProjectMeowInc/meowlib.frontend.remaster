"use client"

import React, { FC } from "react"
import Preloader from "@/pages/admin/UI/Preloader/Preloader"
import classes from "./updateCoinListById.module.css"
import UpdateCoinListItemById from "@/pages/admin/coins/UpdateCoinsHistory/UI/UpdateCoinListByIdtem/UpdateCoinListItemById"
import useUpdateCoinListById from "@/pages/admin/coins/UpdateCoinsHistory/UI/UpdateCoinListById/useUpdateCoinListById"

interface IUpdateCoinListByIdProps {
    userId: number
}

const UpdateCoinListById: FC<IUpdateCoinListByIdProps> = ({ userId }) => {
    const { groupedCoins, getMonth } = useUpdateCoinListById(userId)

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
                                    <UpdateCoinListItemById
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

export default UpdateCoinListById
