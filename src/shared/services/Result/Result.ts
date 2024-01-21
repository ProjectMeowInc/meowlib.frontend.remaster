import { IError } from "@/shared/services/Result/IError"
import { Result as CResult } from "result/src/Result"

export class Result<TResult> extends CResult<TResult, IError> { }