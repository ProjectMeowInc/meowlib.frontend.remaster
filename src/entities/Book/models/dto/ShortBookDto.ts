export interface IShortBookDto {
    id: number
    name: string
    description: string
    imageUrl: string
    author?: {
        id: number
        name: string
    }
}