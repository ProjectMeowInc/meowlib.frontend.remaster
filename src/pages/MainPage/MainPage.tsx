import React from "react"
import classes from "@/pages/MainPage/MainPage.module.css"
import MainPageBooks from "@/pages/MainPage/UI/MainPageBooks/MainPageBooks";
import InputWithIcon from "@/shared/UI/inputWithIcon/InputWithIcon";

const MainPage = () => {

    return (
        <div className={classes.container}>
            <InputWithIcon placeholder={"Enter search terms"} icon={"/img/10.png"} />
            <MainPageBooks/>
        </div>
    )
}

export default MainPage
