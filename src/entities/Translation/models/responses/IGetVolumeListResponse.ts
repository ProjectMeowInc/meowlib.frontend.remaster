export interface IGetVolumeListResponse {
    volume: {
        number: number
        chapters: {
            id: number
            name: string
            releaseDate: Date
            position: number
        }[]
    }[]
}