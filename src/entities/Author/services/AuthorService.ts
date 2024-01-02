import { Result } from "@/shared/services/Result/Result"
import { IAuthorDto } from "@/entities/Author/models/dto/IAuthorDto"
import { AuthorApi } from "@/entities/Author/api/AuthorApi"
import { IShortAuthorDto } from "@/entities/Author/models/dto/IShortAuthorDto"
import { EmptyResult } from "@/shared/services/Result/EmptyResult"

export class AuthorService {

    static async getAllAsync(): Promise<Result<IAuthorDto[]>> {
        const result = await AuthorApi.getAllAsync()

        if (result.hasError()) {
            return Result.withError(result.getError())
        }

        return Result.withOk(result.unwrap().items)
    }

    static async createAsync(requestData: IShortAuthorDto): Promise<Result<IAuthorDto>> {
        return await AuthorApi.createAsync(requestData)
    }

    static async updateByIdAsync(authorId: number, requestData: IShortAuthorDto): Promise<Result<IAuthorDto>> {
        return await AuthorApi.updateByIdAsync(authorId, requestData)
    }

    static async deleteByIdAsync(authorId: number): Promise<EmptyResult> {
        return await AuthorApi.deleteByIdAsync(authorId)
    }

    static async getByIdAsync(authorId: number): Promise<Result<IAuthorDto>> {
        return await AuthorApi.getByIdAsync(authorId)
    }

    static async getBySearchParams(authorName: string): Promise<Result<IAuthorDto[]>> {
        const result = await AuthorApi.getBySearchParams(authorName)

        if (result.hasError()) {
            return Result.withError(result.getError())
        }

        return Result.withOk(result.unwrap().items)
    }
}