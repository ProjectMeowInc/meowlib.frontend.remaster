import { IError } from "@/shared/services/Result/IError"
import { Result as CResult } from "ts-result-meow/dist/Result"

export class Result<TResult> extends CResult<TResult, IError> {}
