import { useFirstLoadingAsync } from "@/shared/hooks/useFirstLoadingAsync"
import { AlertService } from "@/shared/services/AlertService"
import { CoinService } from "@/entities/Coin/service/CoinService"
import { useState } from "react"
import { ICoinsDTO } from "@/entities/Coin/models/dto/ICoinsDTO"

export const useUpdateCoinList = () => {
    const [coins, setCoins] = useState<ICoinsDTO[]>()

    useFirstLoadingAsync(async () => {
        const getCoinsResult = await CoinService.getHistoryUpdateCoins()
        if (getCoinsResult.hasError()) {
            return AlertService.errorMessage(getCoinsResult.getError().errorMessage)
        }

        setCoins(getCoinsResult.unwrap())
    })

    return {
        coins,
    }
}
