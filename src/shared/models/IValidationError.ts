import {IError} from "@/shared/models/IError";

export interface IValidationError extends IError{
    validationErrors: {
        propertyName: string
        message: string
    }[]
}