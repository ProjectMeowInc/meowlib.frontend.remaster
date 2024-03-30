import { IError } from "@/shared/services/Result/IError"
import { EmptyResult as EResult } from "ts-result-meow/dist/EmptyResult"

export class EmptyResult extends EResult<IError> {}
