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