import {FC} from "react";
import classes from "./bookMainInfo.module.css"
import TagItem from "@/pages/BookPages/BookPage/UI/TagItem/TagItem";
import CommentList from "@/pages/BookPages/BookPage/UI/CommentList/CommentList";

interface IBookMainInfoProps {
    id: number
    name: string
    description: string
    tags: {
        id: number
        name: string
    }[]
}

const BookMainInfo: FC<IBookMainInfoProps> = ({id, name, description, tags}) => {
    return (
        <div>
            <div className={classes.name}>
                {name}
            </div>
            <div>
                {description}
            </div>
            <div>
                {
                    tags.map(tag => (
                        <TagItem {...tag} />
                    ))
                }
            </div>
            <div>
                <div>
                    Комментарии:
                </div>
                <CommentList bookId={id}/>
            </div>
        </div>
    )
}

export default BookMainInfo
