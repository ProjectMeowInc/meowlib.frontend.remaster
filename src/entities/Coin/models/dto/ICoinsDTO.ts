import { CoinReason } from "@/entities/Coin/models/CoinReasons"

export interface ICoinsDTO {
    items: {
        id: number
        value: number
        reason: CoinReason
        date: string
    }[]
}
