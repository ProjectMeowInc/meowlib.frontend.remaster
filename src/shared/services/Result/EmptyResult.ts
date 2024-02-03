import { IError } from "@/shared/services/Result/IError"
import { EmptyResult as EResult } from "result/src/EmptyResult"

export class EmptyResult extends EResult<IError> { }