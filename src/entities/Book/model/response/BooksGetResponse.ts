export interface IBooksGetResponse {
    items: {
        id: number
        name: string
        description: string
        imageName: string | null
    }[]
}
