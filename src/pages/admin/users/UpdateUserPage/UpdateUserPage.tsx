import React, {FC} from 'react';
import classes from "@/pages/admin/tags/UpdateTagPage/updateTagPage.module.css";
import Input from "@/shared/UI/Input/Input";
import {useUpdateTagForm} from "@/pages/admin/tags/UpdateTagPage/useUpdateTagForm";
import {useUpdateUserForm} from "@/pages/admin/users/UpdateUserPage/useUpdateUserForm";
import {UsersService} from "@/entities/Users/service/UsersService";
import UpdateTagForm from "@/pages/admin/tags/UpdateTagPage/UpdateTagForm/UpdateTagForm";
import UpdateUserForm from "@/pages/admin/users/UpdateUserPage/UpdateUserForm/UpdateUserForm";
import {IUpdateUserByIdRequest} from "@/entities/Users/models/requests/IUpdateUserByIdRequest";

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
            <UpdateUserForm user={user}/>
        </div>

    );
};

export default UpdateUserPage;