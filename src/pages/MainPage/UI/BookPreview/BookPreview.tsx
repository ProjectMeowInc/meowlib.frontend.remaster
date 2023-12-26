import React from "react"
import classes from "./BookPreview.module.css"

interface IBookPreview {
    image: string
    name: string
    author: {
        authorName: string
    }
}


const BookPreview:React.FC<IBookPreview> = ({image, name, author: {name as authorName}}) => {
    return (
        <div className={classes.container}>
            <img src={`${image}`}/>
            <h4>{name}</h4>
            <p>{authorName}</p>
        </div>
    )
}

export default BookPreview
