import { FC } from "react"
import classes from "./tagItem.module.css"

interface ITagItemProps {
    id: number
    name: string
}

const TagItem: FC<ITagItemProps> = ({ name }) => {
    return <div className={classes.item}>{name}</div>
}

export default TagItem
