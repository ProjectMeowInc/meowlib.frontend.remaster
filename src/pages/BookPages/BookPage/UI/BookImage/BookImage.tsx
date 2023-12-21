import { FC } from "react"
import classes from "./bookImage.module.css"

interface IBookImageProps {
    image: string
}

const BookImage: FC<IBookImageProps> = ({ image }) => {
    return (
        <div className={"null"}>
            <div
                className={classes.background_image}
                style={{backgroundImage: `url(${image})`, backgroundSize: "cover"}}>
                <div
                    style={{backgroundImage: `url(${image})`, backgroundSize: "cover"}}>

                </div>
            </div>
        </div>
    )
}

export default BookImage
