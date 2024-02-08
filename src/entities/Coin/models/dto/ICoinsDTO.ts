import { CoinReason } from "@/entities/Coin/models/CoinReasons"

export interface ICoinsDTO {
    id: number
    value: number
    reason: CoinReason
    date: string
}
