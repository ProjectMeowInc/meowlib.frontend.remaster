import React from "react"
import classes from "./bookPreview.module.css"
import AdaptiveImage from "@/shared/UI/AdaptiveImage/AdaptiveImage"

interface IBookPreview {
    id: number
    image: string | null
    name: string
}

const BookPreview: React.FC<IBookPreview> = ({ id, image, name }) => {
    return (
        <a
            className={classes.container}
            href={`/books/${id}`}
        >
            <AdaptiveImage url={image ?? "NONE"} className={classes.image} />
            <div className={classes.name}>{name}</div>
        </a>
    )
}

export default BookPreview
