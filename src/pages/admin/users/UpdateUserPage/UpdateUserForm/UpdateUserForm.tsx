import React, {FC} from 'react';
import Input from "@/shared/UI/Input/Input";
import {useUpdateUserForm} from "@/pages/admin/users/UpdateUserPage/useUpdateUserForm";
import Button from "@/shared/UI/button/Button";
import {IUserDTO} from "@/entities/Users/models/dto/IUserDTO";

interface IUpdateUserProps {
    user: IUserDTO
}

const UpdateUserForm: FC<IUpdateUserProps> = ({ user }) => {
    const { ChangeHandler, SubmitHandler } = useUpdateUserForm(user.id)

    return (
        <form onSubmit={SubmitHandler}>
            <Input name={'login'} placeholder={'dasd'} onChange={ChangeHandler}/>
            <Input name={'password'} placeholder={'asdasd'} onChange={ChangeHandler}/>
            <Button> Отправить </Button>
        </form>
    );
};

export default UpdateUserForm;