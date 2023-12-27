import classes from "./commentItem.module.css"
import AdaptiveImage from "@/shared/UI/AdaptiveImage/AdaptiveImage";
import {FC} from "react";


interface ICommentItemProps {
    authorName: string
    authorImage: string
    postedAt: Date
    text: string
}

const CommentItem: FC<ICommentItemProps> = ({authorName, authorImage, postedAt, text}) => {
    return (
        <div className={classes.item}>
            <div>
                <AdaptiveImage
                    className={classes.author_image}
                    url={authorImage}
                />
            </div>
            <div className={classes.main_info_block}>
                <div className={classes.first_line}>
                    <div className={classes.author_name}>
                        {authorName}
                    </div>
                    <div className={classes.date}>
                        {postedAt.getDate()}
                        /
                        {postedAt.getMonth() + 1}
                        /
                        {postedAt.getFullYear()}
                    </div>
                </div>
                <div className={classes.text}>
                    {text}
                </div>
            </div>
        </div>
    );
};

export default CommentItem;