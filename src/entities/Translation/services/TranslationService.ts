import { EmptyResult } from "@/shared/services/Result/EmptyResult"
import { IUploadChapterDto } from "@/entities/Translation/models/dto/IUploadChapterDto"
import { TranslationApi } from "@/entities/Translation/api/TranslationApi"
import { IVolumeDto } from "@/entities/Translation/models/dto/IVolumeDto"
import { Result } from "@/shared/services/Result/Result"
import { IChapterDto } from "@/entities/Translation/models/dto/IChapterDto"

export class TranslationService {

    /**
     * Загрузка главы к книге
     * Авторизация: да
     * Необходимая роль: админ
     * @param translationId id перевода
     * @param requestData данные необходимые для загрузки главы
     * @returns EmptyResult
     */
    public static async uploadChapterAsync(translationId: number, requestData: IUploadChapterDto): Promise<EmptyResult> {
        return await TranslationApi.uploadChapterAsync(translationId, requestData)
    }

    /**
     * Получение списка томов
     * Авторизация: нет
     * Необходимая родь: нет
     * @param translationId id перевода
     * @returns IVolumeDto[]
     */
    public static async getVolumeListAsync(translationId: number): Promise<Result<IVolumeDto[]>> {
        const result = await TranslationApi.getVolumeListAsync(translationId)

        if (result.hasError()) {
            return Result.withError(result.getError())
        }

        return Result.withOk(result.unwrap().volume)
    }

    /**
     * Получение главы в переводе
     * Авторизация: нет
     * Необходимая роль: нет
     * @param translationId id перевода
     * @param position номер позиции главы в переводе
     * @returns IChapterDto
     */
    public static async getChapterAsync(translationId: number, position: number): Promise<Result<IChapterDto>> {
        return await TranslationApi.getChapterAsync(translationId, position)
    }

    /**
     * Создание нового перевода
     * Авторизация: да
     * Необходимая роль: нет
     * @param bookId id книги
     * @param teamId id команды
     * @returns EmptyResult
     */
    public static async createTranslation(bookId: number, teamId: number): Promise<EmptyResult> {
        return await TranslationApi.createTranslation({
            bookId,
            teamId
        })
    }
}