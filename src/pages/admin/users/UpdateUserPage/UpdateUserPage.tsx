import React, { FC } from "react"
import { UsersService } from "@/entities/User/service/UsersService"
import UpdateUserForm from "@/pages/admin/users/UI/UpdateUserForm/UpdateUserForm"

interface IUpdateUserPageProps {
    params: {
        userId: number
    }
}

const UpdateUserPage: FC<IUpdateUserPageProps> = async ({ params: { userId } }) => {
    const getUserResult = await UsersService.getUserById(userId)

    if (getUserResult.hasError()) {
        return <div>{getUserResult.getError().errorMessage}</div>
    }

    const user = getUserResult.unwrap()

    return (
        <div>
            <UpdateUserForm user={user} />
        </div>
    )
}

export default UpdateUserPage
