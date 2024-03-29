import React from "react"
import classes from "./bookPreview.module.css"
import AdaptiveImage from "@/shared/UI/AdaptiveImage/AdaptiveImage"
import Link from "next/link"

interface IBookPreview {
    id: number
    image: string | null
    name: string
}

const BookPreview: React.FC<IBookPreview> = ({ id, image, name }) => {
    return (
        <Link
            className={classes.container}
            href={`/books/${id}`}
        >
            <AdaptiveImage url={image ?? "NONE"} className={classes.image} />
            <div className={classes.name}>{name}</div>
        </Link>
    )
}

export default BookPreview
