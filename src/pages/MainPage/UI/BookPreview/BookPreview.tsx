import React from "react"
import classes from "./BookPreview.module.css"
import {BookGetResponseDTO} from "@/entities/Book/model/dto/BookGetResponseDTO";


const BookPreview:React.FC<BookGetResponseDTO> = ({imageName, name, author}) => {
    return (
        <div className={classes.container}>
            <img src={`${imageName}`}/>
            <h4>{name}</h4>
            <p>{author}</p>
        </div>
    )
}

export default BookPreview
