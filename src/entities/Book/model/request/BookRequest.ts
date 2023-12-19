export interface IBookRequest {
    id: number
    name: string
    description: string
    imageUrl: string | null
    author: {
        id: number
        name: string
    } | null
}

export interface IPostBookRequest {
    name: string
    description: string
}
