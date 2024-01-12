import React from "react"
import classes from "@/pages/MainPage/MainPage.module.css"
import LastBookUpdates from "@/pages/MainPage/UI/LastBookUpdates/LastBookUpdates"
import InputWithIcon from "@/shared/UI/inputWithIcon/InputWithIcon"
import LastReviews from "@/pages/MainPage/UI/LastReview/LastReviews"

const MainPage = () => {
    return (
        <div className={classes.container}>
            <InputWithIcon placeholder={"Начните вводить"} icon={"/img/10.png"} />
            <LastBookUpdates />
            <LastReviews/>
        </div>
    )
}

export default MainPage
