"use client"

import React from "react"
import classes from "./BookPreview.module.css"
import { BASE_API_URL } from "@/app/consts"
import { useBookPreview } from "@/pages/MainPage/UI/BookPreview/useBookPreview"

interface IBookPreview {
    id: number
    image: string | null
    name: string
    author: string | undefined
}

const BookPreview: React.FC<IBookPreview> = ({ id, image, name, author }) => {
    const { handleHover, hover } = useBookPreview(id, "InPlans")

    return (
        <div className={classes.container}>
            <img src={`${BASE_API_URL}/${image}`} alt={""} />
            <h4>{name}</h4>
            <p>{author}</p>
            <div className={classes.favorite} onMouseEnter={handleHover} onMouseLeave={handleHover}>
                {hover ? <img src={"/img/12.png"} alt={''} /> : <img src={"/img/11.png"} alt={''}/>}
            </div>
        </div>
    )
}

export default BookPreview
