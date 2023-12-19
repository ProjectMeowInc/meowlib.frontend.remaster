import React from "react"
import classes from "./MenuItem.module.css"

interface IMenuItemProps {
    img: string
    text: string
}

const MenuItem: React.FC<IMenuItemProps> = ({ img, text }) => {
    return (
        <div className={classes.container}>
            <img src={img} alt={""} />
            <p>{text}</p>
            <img src={"/img/5.png"} alt={''} />
        </div>
    )
}

export default MenuItem
