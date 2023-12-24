export interface IGetAllBookResponse {
    items: {
       id: number
       name: string
       description: string
       imageUrl: string
    }[]
}