import { useEffect, useState } from "react"
import { useFirstLoadingAsync } from "@/shared/hooks/useFirstLoadingAsync"
import { UsersService } from "@/entities/User/service/UsersService"
import { IUserDTO } from "@/entities/User/models/dto/IUserDTO"
import { AlertService } from "@/shared/services/AlertService"
import { useParams } from "next/navigation"
import { TeamService } from "@/entities/Team/services/TeamService"

export const useAddUserModal = () => {

    const [users, setUsers] = useState<IUserDTO[] | null>(null)
    const params = useParams<{teamId: string}>()

    useFirstLoadingAsync( async () => {
        const getUsersResult = await UsersService.getAllUsers()

        if (getUsersResult.hasError()) {
            return AlertService.errorMessage(getUsersResult.getError().errorMessage)
        }

        setUsers(getUsersResult.unwrap())
    })



    return {
        users
    }
}