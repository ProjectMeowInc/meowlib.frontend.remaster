import classes from "./bookList.module.css"
import BookPreview from "@/pages/MainPage/UI/BookPreview/BookPreview"

const BooksList = () => {
    return (
        <div className={classes.wrapper}>
            {new Array(8).fill(0).map(() => (
                <BookPreview key={1} id={1} image={null} name={"Some Name"}/>
            ))}
        </div>
    )
}

export default BooksList