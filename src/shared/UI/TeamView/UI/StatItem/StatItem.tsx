import React, { FC } from "react"
import Image, { StaticImageData } from "next/image"
import classes from "./staticImage.module.css"

interface IStatItemProps {
    count: number
    image: StaticImageData
}

const StatItem: FC<IStatItemProps> = ({count, image}) => {
    return (
        <div className={classes.wrapper}>
            <Image src={image} alt={"icon"}/>
            <p>{count}</p>
        </div>
    )
}

export default StatItem