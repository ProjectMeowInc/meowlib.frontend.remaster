import React, {FC} from 'react';
import classes from './DeleteTagListItem.module.css'

interface ITagListItemProps {
    params: {
        bookId: number
    }
    id: number
    name: string
    description: string
}

const DeleteTagListItem:FC<ITagListItemProps> = ({ params: {bookId}, id, name, description}) => {
    return (
        <div className={classes.container}>
            <p>{name}</p>
            <p>{description}</p>
            <p>Удалить</p>
        </div>
    );
};

export default DeleteTagListItem;