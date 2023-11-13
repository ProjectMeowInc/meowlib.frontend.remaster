import {IError} from "@/shared/services/interfaces/IError";
import {IValidationError} from "@/shared/services/interfaces/IValidationError";

class EmptyResult {
    private readonly error: IError | IValidationError | null

    constructor(error: IError| IValidationError | null) {
        this.error = error
    }

    hasError(): boolean {
        return this.error !== null
    }

    isValidationError(): boolean {

        if (!this.error) {
            throw new Error("Ошибка не может быть пуста")
        }

        if ("validationError" in this.error) {
            return true
        }

        return false
    }

    getError(): IError | IValidationError {
        if (!this.error) {
            throw new Error()
        }

        return this.error
    }

    withOk(): EmptyResult {
        return new EmptyResult(null)
    }

    withError(error: IError| IValidationError): EmptyResult {
        return new EmptyResult(error)
    }
}