import React from "react"
import BookPreview from "@/pages/MainPage/UI/BookPreview/BookPreview"
import classes from "@/pages/MainPage/MainPage.module.css"
import Menu from "@/pages/MainPage/UI/Menu/Menu"
import Header from "@/shared/UI/Header/Header"
import SearchInput from "@/pages/MainPage/UI/SearchInput/SearchInput"
import MainPageBooks from "@/pages/MainPage/UI/MainPageBooks/MainPageBooks"

const MainPage = () => {

    return (
        <div className={classes.container}>
            <Header />
            <Menu />
            <SearchInput placeholder={"Enter search terms"} />
            <BookPreview />
            <MainPageBooks/>
        </div>
    )
}

export default MainPage
