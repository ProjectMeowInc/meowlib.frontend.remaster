import { PeopleRoleType } from "@/entities/People/types/PeopleRoleType"

export interface IGetPeopleByIdResponse {
    id: number
    name: string
    books: {
        book: {
            id: number
            name: string
            imageUrl: string
        }
        role: PeopleRoleType
    }[]
}
