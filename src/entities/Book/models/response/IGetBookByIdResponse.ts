export interface IGetBookByIdResponse {
    id: number
    name: string
    description: string
    imageUrl: string
    author: {
        id: number
        name: string
    }
    tags: {
        id: number
        name: string
        description: string
    }[]
    translations: {
        id: number
        name: string
    }[]
}