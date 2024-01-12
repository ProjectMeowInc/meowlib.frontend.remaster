import classes from "./reviewPreview.module.css"
import { FC } from "react"
import Image from "next/image"
import positiveIcon from "@/public/img/icons/smile-positive.svg"
import negativeIcon from "@/public/img/icons/smile-negative.svg"

interface IReviewPreviewProps {
    name: string
    caption: string
    isPositive: boolean
    text: string
}

const ReviewPreview: FC<IReviewPreviewProps> = ({name, caption, isPositive, text}) => {
    return (
        <div className={classes.container}>
            <div className={classes.top}>
                {
                    isPositive
                    ? <Image src={positiveIcon} alt={"positive smile"}/>
                    : <Image src={negativeIcon} alt={"negative smile"}/>
                }
                <div>
                    <div className={classes.name}>
                        {name}
                    </div>
                    <div className={classes.caption}>
                        {caption}
                    </div>
                </div>
            </div>
            <div className={classes.text}>
                {text}
            </div>
        </div>
    )
}

export default ReviewPreview