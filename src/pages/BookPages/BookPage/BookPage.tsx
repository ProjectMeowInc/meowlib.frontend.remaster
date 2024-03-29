import React, { FC } from "react"
import BookImage from "@/pages/BookPages/BookPage/UI/BookImage/BookImage"
import BookMainInfo from "@/pages/BookPages/BookPage/UI/BookMainInfo/BookMainInfo"
import classes from "./bookPage.module.css"
import { BookService } from "@/entities/Book/service/BookService"
import TranslationList from "@/pages/BookPages/BookPage/UI/TranslationList/TranslationList"
import { AvailableSections } from "@/pages/BookPages/BookPage/UI/SectionSelector/useSectionSelector"
import BookName from "@/pages/BookPages/BookPage/UI/BookName/BookName"
import SectionSelector from "@/pages/BookPages/BookPage/UI/SectionSelector/SectionSelector"
import { DEFAULT_BOOK_IMAGE } from "@/app/consts"

interface IBookPageProps {
    params: {
        bookId: number
    }
    searchParams: {
        section?: AvailableSections
    }
}

const BookPage: FC<IBookPageProps> = async ({ params, searchParams }) => {
    const result = await BookService.getBookById(params.bookId)
    if (result.hasError()) {
        return <div>Ошибка загрузки книги: {result.getError().errorMessage}</div>
    }

    const bookData = result.unwrap()

    const section = searchParams.section ?? "main"

    let requiredSection
    switch (section) {
        case "main":
            requiredSection = <BookMainInfo {...bookData} />
            break
        case "translation":
            requiredSection = <TranslationList translations={bookData.translations} />
            break
    }

    return (
        <div className={classes.page}>
            <BookImage image={bookData.imageUrl ?? DEFAULT_BOOK_IMAGE} bookId={params.bookId} />
            <div className={classes.info_block}>
                <BookName name={bookData.name} />
                <SectionSelector />
                {requiredSection}
            </div>
        </div>
    )
}

export default BookPage
