import { Result } from "@/shared/services/Result/Result"
import { EmptyResult } from "@/shared/services/Result/EmptyResult"
import { PeopleApi } from "@/entities/People/api/PeopleApi"
import { IPeopleDto } from "@/entities/People/models/dto/IPeopleDto"
import { IShortPeopleDto } from "@/entities/People/models/dto/IShortPeopleDto"
import { PeopleEntity } from "@/entities/People/PeopleEntity"
import { ILongPeopleDto } from "@/entities/People/models/dto/ILongPeopleDto"

export class PeopleService {
    static async getAllAsync(pageNumber?: number): Promise<Result<IPeopleDto[]>> {
        const result = await PeopleApi.getAllAsync(pageNumber)

        if (result.hasError()) {
            return Result.withError(result.getError())
        }

        return Result.withOk(result.unwrap().items)
    }

    static async createAsync(requestData: IShortPeopleDto): Promise<Result<PeopleEntity>> {
        return await PeopleApi.createAsync(requestData)
    }

    static async updateByIdAsync(peopleId: number, requestData: IShortPeopleDto): Promise<Result<PeopleEntity>> {
        return await PeopleApi.updateByIdAsync(peopleId, requestData)
    }

    static async deleteByIdAsync(peopleId: number): Promise<EmptyResult> {
        return await PeopleApi.deleteByIdAsync(peopleId)
    }

    static async getByIdAsync(peopleId: number): Promise<Result<ILongPeopleDto>> {
        return await PeopleApi.getByIdAsync(peopleId)
    }
}
