export interface IVolumeDto {
    number: number
    chapters: {
        id: number
        name: string
        releaseDate: Date
        position: number
    }[]
}