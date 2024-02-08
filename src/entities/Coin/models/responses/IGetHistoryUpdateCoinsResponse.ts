import {CoinReason} from "@/entities/Coin/models/CoinReasons";

export interface IGetHistoryUpdateCoinsResponse {
    items: {
        id: number
        value: number
        reason: CoinReason
        date: string
    }[]
}