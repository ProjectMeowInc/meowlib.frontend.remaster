import classes from "./bookList.module.css"
import BookPreview from "@/pages/MainPage/UI/BookPreview/BookPreview"
import { FC } from "react"
import AddTranslateButton from "@/pages/TeamPages/TeamPage/UI/BookList/UI/AddTranslateButton/AddTranslateButton"

interface IBookListProps {
    teamId: number
}

const BooksList: FC<IBookListProps> = ({ teamId }) => {
    return (
        <div className={classes.wrapper}>
            <AddTranslateButton teamId={teamId} />
            {new Array(8).fill(0).map(() => (
                <BookPreview key={1} id={1} image={null} name={"Some Name"} />
            ))}
        </div>
    )
}

export default BooksList
