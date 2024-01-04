'use client'

import {FC} from "react";
import classes from './PeopleItem.module.css'

interface IPeopleItemProps {
    id: number
    text: string
    onPost: (bookId: number) => Promise<void>
    onDelete: (bookId: number, peopleId: number) => Promise<void>
}

const PeopleItem: FC<IPeopleItemProps> = ({ id, text, onPost, onDelete }) => {

    return (
        <div className={classes.link}>
            <div className={classes.link__wrapper}>
                <p className={classes.link_text}>
                    {text}
                </p>
                <p className={classes.add_btn} onClick={async () => await onPost(id)}>Добавить</p>
                <p className={classes.delete_btn} onClick={async () => await onDelete(0,0)}>
                    Удалить
                </p>
            </div>
        </div>
    )
}
export default PeopleItem