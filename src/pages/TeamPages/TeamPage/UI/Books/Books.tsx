import classes from "./books.module.css"
import BookPreview from "@/pages/MainPage/UI/BookPreview/BookPreview"

const Books = () => {
    return (
        <div className={classes.wrapper}>
            {new Array(8).fill(0).map(() => (
                <BookPreview key={1} id={1} image={null} name={"Some Name"}/>
            ))}
        </div>
    )
}

export default Books