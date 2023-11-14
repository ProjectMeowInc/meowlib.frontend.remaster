import {IBaseErrorResponse} from "@/shared/models/IBaseErrorResponse";

export interface IValidationErrorResponse extends IBaseErrorResponse {
    validationErrors: {
        propertyName: string
        message: string
    }[]
}