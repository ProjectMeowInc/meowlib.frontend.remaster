import React from "react"
import classes from "@/pages/MainPage/MainPage.module.css"
import LastBookUpdates from "@/pages/MainPage/UI/MainPageBooks/MainPageBooks"
import InputWithIcon from "@/shared/UI/inputWithIcon/InputWithIcon"

const MainPage = () => {
    return (
        <div className={classes.container}>
            <InputWithIcon placeholder={"Начните вводить"} icon={"/img/10.png"} />
            <LastBookUpdates />
        </div>
    )
}

export default MainPage
