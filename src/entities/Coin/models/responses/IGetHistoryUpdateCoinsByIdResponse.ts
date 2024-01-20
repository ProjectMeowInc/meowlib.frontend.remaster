import {CoinReason} from "@/entities/Coin/models/CoinReasons";

export interface IGetHistoryUpdateCoinsByIdResponse {
    items: {
        id: number
        value: number
        reason: CoinReason
        date: string
    }[]
}