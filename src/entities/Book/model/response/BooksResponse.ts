import { IBooksGetResponse } from "@/entities/Book/model/response/BooksGetResponse"

export interface IBooksResponse {
    items: IBooksGetResponse[]
}
