import { UserEntity } from "@/entities/User/models/UserEntity"

export interface IGetAllUsersResponse {
    items: UserEntity[]
}
