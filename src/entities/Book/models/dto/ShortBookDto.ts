export interface IShortBookDto {
    id: number
    name: string
    description: string
    image: string
    author?: {
        id: number
        name: string
    }
}
