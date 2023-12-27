"use client"

import { FC } from "react"
import { useCommentList } from "@/pages/BookPages/BookPage/UI/CommentList/useCommentList"
import classes from "./commentList.module.css"
import CommentItem from "@/pages/BookPages/BookPage/UI/CommentItem/CommentItem"

interface ICommentListProps {
    bookId: number
}

const CommentList: FC<ICommentListProps> = () => {
    const { comments } = useCommentList()

    if (!comments) {
        // todo: add loader
        return <div>Комментарии загружаются...</div>
    }

    if (!comments.length) {
        // todo: add styles
        return <div>Комментарии отсутствуют...</div>
    }

    return (
        <div className={classes.list}>
            {comments.map((comment) => (
                <CommentItem
                    authorName={comment.author.login}
                    authorImage={"https://i.pinimg.com/736x/fa/f2/11/faf2114584ee9a58c797b84c9c362264.jpg"}
                    postedAt={comment.postedAt}
                    text={comment.text}
                />
            ))}
        </div>
    )
}

export default CommentList
