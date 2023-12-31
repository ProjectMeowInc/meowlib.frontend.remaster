import React, {FC} from 'react';
import classes from './BookItem.module.css'

interface IBookItemProps {
    id: number
    name: string
    description: string
    imageUrl: string
    author?: string
}

const BookItem: FC<IBookItemProps> = ({id, name, description, imageUrl , author}) => {
    return (
        <div className={classes.container}>
            <p>{id}</p>
            <p>{name}</p>
            <p>{description}</p>
            <p>{imageUrl}</p>
            <p>{}</p>
        </div>
    );
};

export default BookItem;