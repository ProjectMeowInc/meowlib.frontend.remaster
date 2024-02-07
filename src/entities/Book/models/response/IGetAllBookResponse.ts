export interface IGetAllBookResponse {
    items: {
        id: number
        name: string
        description: string
        image?: string
        author?: {
            id: number
            name: string
        }
    }[]
}
