import React from "react"
import classes from "./BookPreview.module.css"

interface IBookPreview {
    id: number
    image: string | null
    name: string
    author: string
}


const BookPreview:React.FC<IBookPreview> = ({image, name, author}) => {
    return (
        <div className={classes.container}>
            <img src={`${image}`}/>
            <h4>{name}</h4>
            <p>{author}</p>
        </div>
    )
}

export default BookPreview
