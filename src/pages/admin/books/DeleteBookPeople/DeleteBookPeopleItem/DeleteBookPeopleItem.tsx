import React, {FC} from 'react';
import {PeopleRoleType} from "@/entities/People/types/PeopleRoleType";

interface IDeleteBookPeopleItemProps {
    id: number
    name: string
    role: PeopleRoleType
    onDelete: (id: number) => Promise<void>
}

const DeleteBookPeopleItem:FC<IDeleteBookPeopleItemProps> = ({id, name , role, onDelete}) => {
    return (
        <div>
            <p>{name}</p>
            <p>{role}</p>
            <p onClick={async ()=> await onDelete(id)}>Удалить</p>
        </div>
    );
};

export default DeleteBookPeopleItem;