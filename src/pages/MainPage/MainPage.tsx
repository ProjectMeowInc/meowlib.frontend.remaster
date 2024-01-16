import React from "react"
import classes from "@/pages/MainPage/MainPage.module.css"
import LastBookUpdates from "@/pages/MainPage/UI/LastBookUpdates/LastBookUpdates"
import LastReviews from "@/pages/MainPage/UI/LastReview/LastReviews"

const MainPage = () => {
    return (
        <div className={classes.container}>
            <LastBookUpdates />
            <div className={classes.reviews}>
                <LastReviews/>
            </div>
        </div>
    )
}

export default MainPage
