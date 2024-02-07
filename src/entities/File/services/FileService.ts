import { FileApi } from "@/entities/File/api/FileApi"
import { Result } from "@/shared/services/Result/Result"

export class FileService {
    public static async uploadImageAsync(image: FormData): Promise<Result<number>> {
        const result = await FileApi.uploadImageAsync(image)

        if (result.hasError()) {
            return Result.withError(result.getError())
        }

        return Result.withOk(result.unwrap().createdId)
    }
}
