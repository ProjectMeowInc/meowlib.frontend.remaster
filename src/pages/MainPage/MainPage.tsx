import React from "react"
import classes from "@/pages/MainPage/MainPage.module.css"
import Menu from "@/pages/MainPage/UI/Menu/Menu"
import Header from "@/shared/UI/Header/Header"
import SearchInput from "@/pages/MainPage/UI/SearchInput/SearchInput"
import MainPageBooks from "@/pages/MainPage/UI/MainPageBooks/MainPageBooks";

const MainPage = () => {

    return (
        <div className={classes.container}>
            <Header />
            <Menu />
            <SearchInput placeholder={"Enter search terms"} />
        <div className={classes.books}>
            <MainPageBooks/>
        </div>


        </div>
    )
}

export default MainPage
