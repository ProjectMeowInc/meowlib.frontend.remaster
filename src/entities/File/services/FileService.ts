import { FileApi } from "@/entities/File/api/FileApi"
import { Result } from "@/shared/services/Result/Result"
import { error, ok } from "ts-result-meow"

export class FileService {
    public static async uploadImageAsync(image: FormData): Promise<Result<number>> {
        const result = await FileApi.uploadImageAsync(image)

        if (result.hasError()) {
            return error(result.getError())
        }

        return ok(result.unwrap().createdId)
    }
}
