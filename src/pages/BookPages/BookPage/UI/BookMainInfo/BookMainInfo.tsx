import { FC } from "react"
import classes from "./bookMainInfo.module.css"
import TagItem from "@/pages/BookPages/BookPage/UI/TagItem/TagItem"
import CommentList from "@/pages/BookPages/BookPage/UI/CommentList/CommentList"

interface IBookMainInfoProps {
    id: number
    description: string
    tags: {
        id: number
        name: string
    }[]
}

const BookMainInfo: FC<IBookMainInfoProps> = ({ id, description, tags }) => {
    return (
        <div className={classes.block}>
            <div className={classes.description}>{description}</div>
            {tags.length > 0 && (
                <div className={classes.tags_list}>
                    {tags.map((tag) => (
                        <TagItem key={tag.id} {...tag} />
                    ))}
                </div>
            )}

            <div className={classes.comments_block}>
                <div className={classes.comments_caption}>Комментарии:</div>
                <CommentList bookId={id} />
            </div>
        </div>
    )
}

export default BookMainInfo
