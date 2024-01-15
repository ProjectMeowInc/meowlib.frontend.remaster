"use client"

import React from "react"
import classes from "./BookPreview.module.css"
import { BASE_API_URL } from "@/app/consts"

interface IBookPreview {
    id: number
    image: string | null
    name: string
    author: string | undefined
}

const BookPreview: React.FC<IBookPreview> = ({ image, name, author }) => {

    return (
        <div className={classes.container}>
            <img src={`${BASE_API_URL}/${image}`} alt={""} />
            <h4>{name}</h4>
            <p>{author}</p>
        </div>
    )
}

export default BookPreview
