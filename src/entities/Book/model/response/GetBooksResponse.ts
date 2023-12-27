export interface IGetBooksResponse {
    items: {
        id: number
        name: string
        description: string
        imageName: string | null,
        author: {
            id: number
            name: string
        } | null
    }[]
}
