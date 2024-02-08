import { EmptyResult } from "@/shared/services/Result/EmptyResult"
import { HTTPRequest } from "@/shared/services/HTTPResult/HTTPRequest"
import { IUploadChapterRequest } from "@/entities/Translation/models/requests/IUploadChapterRequest"
import { IGetVolumeListResponse } from "@/entities/Translation/models/responses/IGetVolumeListResponse"
import { Result } from "@/shared/services/Result/Result"
import { IGetChapterResponse } from "@/entities/Translation/models/responses/IGetChapterResponse"
import { ICreateTranslationRequest } from "@/entities/Translation/models/requests/ICreateTranslationRequest"

export class TranslationApi {

    /**
     * Загрузка главы к книге
     * Авторизация: да
     * Необходимая роль: админ
     * @param translationId id перевода
     * @param requestData данные необходимые для загрузки главы
     * @returns EmptyResult
     */
    public static async uploadChapterAsync(translationId: number, requestData: IUploadChapterRequest): Promise<EmptyResult> {
        const result = await new HTTPRequest<void>()
            .withUrl(`/v2/translation/${translationId}/upload-chapter`)
            .withPostMethod()
            .withBody(requestData)
            .withAuth()
            .sendAsync()

        if (result.hasError()) {
            return EmptyResult.withError(result.getError())
        }

        return EmptyResult.withOk()
    }

    /**
     * Получение списка томов
     * Авторизация: нет
     * Необходимая родь: нет
     * @param translationId id перевода
     * @returns IGetVolumeListResponse
     */
    public static async getVolumeListAsync(translationId: number): Promise<Result<IGetVolumeListResponse>> {
        const result = await new HTTPRequest<IGetVolumeListResponse>()
            .withUrl(`/v2/translation/${translationId}/volume`)
            .withGetMethod()
            .sendAsync()

        if (result.hasError()) {
            return Result.withError(result.getError())
        }

        return Result.withOk(result.unwrap())
    }

    /**
     * Получение главы в переводе
     * Авторизация: нет
     * Необходимая роль: нет
     * @param translationId id перевода
     * @param position номер позиции главы в переводе
     * @returns IGetChapterResponse
     */
    public static async getChapterAsync(translationId: number, position: number): Promise<Result<IGetChapterResponse>> {
        const result = await new HTTPRequest<IGetChapterResponse>()
            .withUrl(`/v1/translation/${translationId}/chapters/${position}`)
            .withGetMethod()
            .sendAsync()

        if (result.hasError()) {
            return Result.withError(result.getError())
        }

        return Result.withOk(result.unwrap())
    }

    /**
     * Создание нового перевода
     * Авторизация: да
     * Необходимая роль: нет
     * @param requestData данные необходимые для создания перевода
     * @returns EmptyResult
     */
    public static async createTranslation(requestData: ICreateTranslationRequest): Promise<EmptyResult> {
        const result = await new HTTPRequest<void>()
            .withUrl("/v1/translation")
            .withPostMethod()
            .withBody(requestData)
            .withAuth()
            .sendAsync()

        if (result.hasError()) {
            return EmptyResult.withError(result.getError())
        }

        return EmptyResult.withOk()
    }
}