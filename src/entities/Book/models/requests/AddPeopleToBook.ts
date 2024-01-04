import {PeopleRoleType} from "@/entities/People/types/PeopleRoleType";

export interface IAddPeopleToBook {
    peopleId: number
    role: PeopleRoleType
}