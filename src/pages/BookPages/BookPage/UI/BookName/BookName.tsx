import { FC } from "react"
import classes from "./bookName.module.css"

interface IBookNameProps {
    name: string
}

const BookName: FC<IBookNameProps> = ({ name }) => {
    return <div className={classes.name}>{name}</div>
}

export default BookName
