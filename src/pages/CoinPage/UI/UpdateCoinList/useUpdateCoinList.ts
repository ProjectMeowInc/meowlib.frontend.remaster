import { useFirstLoadingAsync } from "@/shared/hooks/useFirstLoadingAsync"
import { AlertService } from "@/shared/services/AlertService"
import { CoinService } from "@/entities/Coin/service/CoinService"
import { useState } from "react"
import { ICoinsDTO } from "@/entities/Coin/models/dto/ICoinsDTO"

interface IGroupedCoins {
    [key: string]: ICoinsDTO[]
}

const useUpdateCoinList = () => {
    const [groupedCoins, setGroupedCoins] = useState<IGroupedCoins>({})

    useFirstLoadingAsync(async () => {
            const getCoinHistoryResult = await CoinService.getHistoryUpdateCoins()
            if (getCoinHistoryResult.hasError()) {
                return AlertService.errorMessage(getCoinHistoryResult.getError().errorMessage)
            }

            const sortedCoins = getCoinHistoryResult.unwrap().sort((a: ICoinsDTO, b: ICoinsDTO) => {
                const dateA = new Date(`${a.date}`)
                const dateB = new Date(`${b.date}`)
                return dateB.getTime() - dateA.getTime()
            })
            const groupedCoinsData = sortedCoins.reduce((accumulator: IGroupedCoins, currentCoin: ICoinsDTO) => {
                const date = currentCoin.date.split("T")[0]
                if (!accumulator[date]) {
                    accumulator[date] = []
                }
                accumulator[date].push(currentCoin)
                return accumulator
            }, {})

            setGroupedCoins(groupedCoinsData)
    })

    const getMonth = (mothNumber: string): string => {
        let monthString
        switch (mothNumber) {
            case "01":
                monthString = "января"
                break
            case "02":
                monthString = "февраля"
                break
            case "03":
                monthString = "марта"
                break
            case "04":
                monthString = "апреля"
                break
            case "05":
                monthString = "мая"
                break
            case "06":
                monthString = "июня"
                break
            case "07":
                monthString = "июля"
                break
            case "08":
                monthString = "августа"
                break
            case "09":
                monthString = "сентября"
                break
            case "10":
                monthString = "октября"
                break
            case "11":
                monthString = "ноября"
                break
            case "12":
                monthString = "декабря"
                break
            default:
                monthString = "неверный месяц"
                break
        }

        return monthString || "неверный месяц"
    }

    return {
        groupedCoins,
        getMonth,
    }
}

export default useUpdateCoinList
