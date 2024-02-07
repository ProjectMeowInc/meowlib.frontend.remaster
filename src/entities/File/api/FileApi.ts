import { Result } from "@/shared/services/Result/Result"
import { IUploadImageResponse } from "@/entities/File/models/responses/IUploadImageResponse"
import { HTTPRequest } from "@/shared/services/HTTPResult/HTTPRequest"

export class FileApi {
    public static async uploadImageAsync(image: FormData): Promise<Result<IUploadImageResponse>> {
        const result = await new HTTPRequest<IUploadImageResponse>()
            .withUrl("/v1/images/upload")
            .withPostMethod()
            .withAuth()
            .withBody(image)
            .sendAsync()

        if (result.hasError()) {
            return Result.withError(result.getError())
        }

        return Result.withOk(result.unwrap())
    }
}
