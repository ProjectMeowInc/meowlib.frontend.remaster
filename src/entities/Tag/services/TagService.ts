import { ICreateTagRequest } from "@/entities/Tag/models/requests/ICreateTagRequest"
import { Result } from "@/shared/services/Result/Result"
import { TagApi } from "@/entities/Tag/api/TagApi"
import { ICreateTagDTO } from "@/entities/Tag/models/models/ICreateTagDTO"
import { ITagDTO } from "@/entities/Tag/models/models/ITagDTO"
import { EmptyResult } from "@/shared/services/Result/EmptyResult"
import { IUpdateTagDTO } from "@/entities/Tag/models/models/IUpdateTagDTO"

export class TagService {

    static async createAsync(requestData: ICreateTagRequest): Promise<Result<ICreateTagDTO>> {
        return await TagApi.createAsync(requestData)
    }

    static async getAllAsync(): Promise<Result<ITagDTO[]>> {
        const result = await TagApi.getAllAsync()

        if (result.hasError()) {
            return Result.withError(result.getError())
        }

        return Result.withOk(result.unwrap().items)
    }

    static async deleteAsync(tagId: number): Promise<EmptyResult> {
        return await TagApi.deleteByIdAsync(tagId)
    }

    static async updateByIdAsync(tagId: number, requestData: IUpdateTagDTO): Promise<Result<ITagDTO>> {
        return await TagApi.updateByIdAsync(tagId, requestData)
    }

    static async getByIdAsync(tagId: number) {
        return await TagApi.getByIdAsync(tagId)
    }
}