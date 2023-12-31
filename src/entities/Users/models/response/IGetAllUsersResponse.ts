import {UserEntity} from "@/entities/Users/models/UserEntity";

export interface IGetAllUsersResponse {
    items: UserEntity[]
}