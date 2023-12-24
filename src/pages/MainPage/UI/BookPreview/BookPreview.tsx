import React from "react"
import classes from "./BookPreview.module.css"

const BookPreview = () => {
    return (
        <div className={classes.container}>
            <img src={'/img/4.png'} alt={''}/>
            <h4>Добро пожаловать в класс...</h4>
            <p>Автор</p>
        </div>
    )
}

export default BookPreview
