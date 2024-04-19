import { Result } from "@/shared/services/Result/Result"
import { IUploadImageResponse } from "@/entities/File/models/responses/IUploadImageResponse"
import { HTTPRequest } from "@/shared/services/HTTPResult/HTTPRequest"
import { error, ok } from "ts-result-meow"

export class FileApi {
    public static async uploadImageAsync(image: FormData): Promise<Result<IUploadImageResponse>> {
        const result = await new HTTPRequest<IUploadImageResponse>()
            .withUrl("/v1/images/upload")
            .withPostMethod()
            .withAuth()
            .withBody(image)
            .sendAsync()

        if (result.hasError()) {
            return error(result.getError())
        }

        return ok(result.unwrap())
    }
}
