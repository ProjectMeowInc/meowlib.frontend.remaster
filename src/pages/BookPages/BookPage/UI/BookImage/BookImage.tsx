import { FC } from "react"
import classes from "./bookImage.module.css"
import Button from "@/shared/UI/button/Button";

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
                    className={classes.main_image}
                    style={{backgroundImage: `url(${image})`, backgroundSize: "cover"}}>
                </div>
            </div>
            <div className={classes.buttons}>
                <Button className={classes.button}>
                    Продолжить читать
                </Button>
                <Button className={classes.button}>
                    Добавить в список
                </Button>
            </div>
        </div>
    )
}

export default BookImage
