import BookPage from "@/pages/BookPages/BookPage/BookPage"
import { BookService } from "@/entities/Book/service/BookService"
import { AvailableSections } from "@/pages/BookPages/BookPage/UI/SectionSelector/useSectionSelector"
import { Metadata } from "next"

interface IBookPageProps {
    params: {
        bookId: number
    }
    searchParams: {
        section?: AvailableSections
    }
}

export const generateMetadata = async ({params, searchParams}: IBookPageProps): Promise<Metadata> => {
    const bookId = params.bookId
    const result = await BookService.getBookByIdAsync(bookId)

    if (result.hasError()) {
        return {
            title: "MeowLib",
            description: "The best library of ranobe in the world"
        }
    }

    const book = result.unwrap()

    return {
        title: `Читать ${book.name}`,
        description: `Читать ранобэ ${book.name} бесплатно без смс и регистрации онлайн инкогнито без слежки без фсб даркнет. Торгуем хорошим настроением.`,
        keywords: book.tags.map(tag => tag.name)
    }
}

export default BookPage;