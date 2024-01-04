import { PeopleRoleType } from "@/entities/People/types/PeopleRoleType"

export interface ILongPeopleDto {
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