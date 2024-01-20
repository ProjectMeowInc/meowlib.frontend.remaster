import { EmptyResult } from "@/shared/services/Result/EmptyResult"
import { CoinApi } from "@/entities/Coin/api/CoinApi"
import { Result } from "@/shared/services/Result/Result"
import { ICoinsDTO } from "@/entities/Coin/models/dto/ICoinsDTO"

export class CoinService {
    static async updateCoins(userId: number, updateCoins: number): Promise<EmptyResult> {
        return await CoinApi.updateCoins({ userId, updateCoins })
    }

    static async getHistoryUpdateCoins(): Promise<Result<ICoinsDTO>> {
        return await CoinApi.getHistoryUpdateCoins()
    }

    static async getHistoryUpdateCoinsById(userId: number): Promise<Result<ICoinsDTO>> {
        return await CoinApi.getHistoryUpdateCoinsById(userId)
    }
}
