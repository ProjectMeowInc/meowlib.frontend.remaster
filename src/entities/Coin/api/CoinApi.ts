import {IUpdateCoinsRequest} from "@/entities/Coin/models/requests/IUpdateCoinsRequest";
import {HTTPRequest} from "@/shared/services/HTTPResult/HTTPRequest";
import {EmptyResult} from "@/shared/services/Result/EmptyResult";
import {IGetHistoryUpdateCoinsResponse} from "@/entities/Coin/models/responses/IGetHistoryUpdateCoinsResponse";
import {Result} from "@/shared/services/Result/Result";
import {IGetHistoryUpdateCoinsByIdResponse} from "@/entities/Coin/models/responses/IGetHistoryUpdateCoinsByIdResponse";

export class CoinApi {
    static async updateCoins(requestData: IUpdateCoinsRequest): Promise<EmptyResult> {
        const result = await new HTTPRequest<void>()
            .withUrl(`/v1/coins/admin-change`)
            .withPostMethod()
            .withAuth()
            .withBody(requestData)
            .sendAsync()

        if (result.hasError()) {
            return EmptyResult.withError(result.getError())
        }

        return EmptyResult.withOk()
    }

    static async getHistoryUpdateCoins(): Promise<Result<IGetHistoryUpdateCoinsResponse>> {
        const result = await new HTTPRequest<IGetHistoryUpdateCoinsResponse>()
            .withUrl(`/v1/coins/my`)
            .withGetMethod()
            .withAuth()
            .sendAsync()

        if (result.hasError()) {
            return Result.withError(result.getError())
        }

        return Result.withOk(result.unwrap())
    }

    static async getHistoryUpdateCoinsById(userId: number): Promise<Result<IGetHistoryUpdateCoinsByIdResponse>> {
        const result = await new HTTPRequest<IGetHistoryUpdateCoinsByIdResponse>()
            .withUrl(`/v1/coins/admin-get/${userId}`)
            .withGetMethod()
            .withAuth()
            .sendAsync()

        if (result.hasError()) {
            return Result.withError(result.getError())
        }

        return Result.withOk(result.unwrap())
    }
}