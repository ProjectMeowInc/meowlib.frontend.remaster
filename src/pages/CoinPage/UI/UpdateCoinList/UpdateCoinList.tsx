import React from "react"
import { useUpdateCoinList } from "@/pages/CoinPage/UI/UpdateCoinList/useUpdateCoinList"
import Preloader from "@/pages/admin/UI/Preloader/Preloader"
import UpdateCoinListItem from "@/pages/CoinPage/UI/UpdateCoinListItem/UpdateCoinListItem"

const UpdateCoinList = () => {
    const { coins } = useUpdateCoinList()

    if (!coins) {
        return <Preloader />
    }

    return (
        <div>
            {coins.map((coin) => (
                <UpdateCoinListItem
                    id={coin.id}
                    key={coin.id}
                    value={coin.value}
                    reason={coin.reason}
                    date={coin.date}
                />
            ))}
        </div>
    )
}

export default UpdateCoinList
