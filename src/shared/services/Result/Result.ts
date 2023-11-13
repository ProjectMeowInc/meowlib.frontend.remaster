import {IError} from "@/shared/services/interfaces/IError";
import {IValidationError} from "@/shared/services/interfaces/IValidationError";

export class Result<TType> {
    private readonly value: TType | null
    private readonly error: IError | IValidationError | null

    constructor(value: TType | null, error: IError| IValidationError | null) {
        this.value = value
        this.error = error
    }

    unwrap(): TType {
        if (!this.value) {
            throw new Error("Значение не может быть пусто")
        }

        return this.value
    }

    hasError(): boolean {
        return this.error !== null
    }

    getError(): IError | IValidationError {
        if (!this.error) {
            throw new Error("Ошибка не может быть пуста")
        }

        return this.error
    }

    static withOk<TResult>(value: TResult): Result<TResult> {
        return new Result<TResult>(value, null)
    }

    static withError<TResult>(error: IError | IValidationError): Result<TResult> {
        return new Result<TResult>(null, error)
    }
}