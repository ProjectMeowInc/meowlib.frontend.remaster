import {Result} from "@/shared/services/Result/Result";
import {IUserDTO} from "@/entities/Users/models/dto/IUserDTO";
import {UsersApi} from "@/entities/Users/api/UsersApi";
import {IUpdateUserDTO} from "@/entities/Users/models/dto/IUpdateUserDTO";

export class UsersService {
    static async getAllUsers(): Promise<Result<IUserDTO[]>> {
        const result = await UsersApi.getAllUsers()

            if (result.hasError()) {
                return Result.withError(result.getError())
            }

        return Result.withOk(result.unwrap().items)
    }

    static async getUserById(usersId: number): Promise<Result<IUserDTO>> {
        return await UsersApi.getUserById(usersId)
    }

    static async updateUserById(usersId: number, requestData: IUpdateUserDTO): Promise<Result<IUserDTO>> {
        return await UsersApi.updateUserById(usersId, requestData)
    }
}