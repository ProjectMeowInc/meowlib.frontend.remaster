import { PeopleRoleType } from "@/entities/People/types/PeopleRoleType"

export interface IAddPeopleToBookRequest {
    peopleId: number
    role: PeopleRoleType
}
