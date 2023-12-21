"use client"

import {FC} from "react";
import {useCommentList} from "@/pages/BookPages/BookPage/UI/CommentList/useCommentList";

interface ICommentListProps {
    bookId: number
}

const CommentList: FC<ICommentListProps> = ({bookId}) => {

    const {comments} = useCommentList()

    if (!comments) {
        // todo: add loader
        return <div>Комментарии загружаются...</div>
    }

    if (!comments.length) {
        return <div>Комментарии отсутствуют...</div>
    }

    return (
        <div>
            {
                comments.map(comment => (
                    <div>
                        {comment.text}
                    </div>
                ))
            }
        </div>
    );
};

export default CommentList;