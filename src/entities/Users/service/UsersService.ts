import {Result} from "@/shared/services/Result/Result";
import {IUserDTO} from "@/entities/Users/models/dto/IUserDTO";
import {UsersApi} from "@/entities/Users/api/UsersApi";
import {IUpdateUserByIdRequest} from "@/entities/Users/models/requests/IUpdateUserByIdRequest";

export class UsersService {
    static async getAllUsers(): Promise<Result<IUserDTO[]>> {
        const result = await UsersApi.getAllUsers()

            if (result.hasError()) {
                return Result.withError(result.getError())
            }

        return Result.withOk(result.unwrap().items)
    }

    static async getUserById(id: number) {
        return UsersApi.getUserById(id)
    }

    static async updateUserById(id: number, requestData: IUpdateUserByIdRequest): Promise<Result<IUserDTO>> {
        return UsersApi.updateUserById(id, requestData)
    }

}