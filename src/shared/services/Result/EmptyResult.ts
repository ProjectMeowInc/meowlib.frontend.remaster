import { IError } from "@/shared/services/Result/IError"

export class EmptyResult {
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

    static withOk(): EmptyResult {
        return new EmptyResult(null)
    }

    static withError(error: IError): EmptyResult {
        return new EmptyResult(error)
    }
}
