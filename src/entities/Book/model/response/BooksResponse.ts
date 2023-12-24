import { IBooksGetResponse } from "@/entities/Book/model/response/GetBooksResponse"

export interface IBooksResponse {
    items: IBooksGetResponse[]
}
