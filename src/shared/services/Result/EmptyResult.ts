import {IError} from "@/shared/models/IError";

class EmptyResult {
    private readonly error: IError | null

    protected constructor(error: IError | null) {
        this.error = error
    }

    hasError(): boolean {
        return this.error !== null
    }

    getError(): IError {
        if (!this.error) {
            throw new Error("Ошибка не может быть пуста")
        }

        return this.error
    }

    withOk(): EmptyResult {
        return new EmptyResult(null)
    }

    withError(error: IError): EmptyResult {
        return new EmptyResult(error)
    }
}