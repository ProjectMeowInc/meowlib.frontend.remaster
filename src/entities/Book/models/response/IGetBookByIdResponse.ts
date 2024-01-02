import {Author} from "next/dist/lib/metadata/types/metadata-types";

export interface IGetBookByIdResponse {
    id: number
    name: string
    description: string
    imageUrl?: string
    peoples?: {
        id: number
        name: string
        role: Author
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
