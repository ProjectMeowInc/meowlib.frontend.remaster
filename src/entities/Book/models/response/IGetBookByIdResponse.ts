import {PeopleRoleType} from "@/entities/People/types/PeopleRoleType";

export interface IGetBookByIdResponse {
    id: number
    name: string
    description: string
    imageUrl?: string
    peoples: {
        id: number
        name: string
        role: PeopleRoleType
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
