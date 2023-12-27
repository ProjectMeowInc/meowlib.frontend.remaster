export interface IBookDTO {
    id: number
    name: string
    description: string
    imageUrl: string | null
    author: {
        id: number
        name: string
    } | null
}
