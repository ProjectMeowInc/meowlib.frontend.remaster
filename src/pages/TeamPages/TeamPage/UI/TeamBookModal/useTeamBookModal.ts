import { useState } from "react"
import { IShortBookDto } from "@/entities/Book/models/dto/ShortBookDto"
import { useFirstLoadingAsync } from "@/shared/hooks/useFirstLoadingAsync"
import { BookService } from "@/entities/Book/service/BookService"
import { AlertService } from "@/shared/services/AlertService"

export const useTeamBookModal = (teamId: number) => {
    const [books, setBooks] = useState<IShortBookDto[] | null>()

    useFirstLoadingAsync(async () => {
        const result = await BookService.getBooks()

        if (result.hasError()) {
            return AlertService.errorMessage(result.getError().errorMessage)
        }

        setBooks(result.unwrap())
    })

    return {
        books,
    }
}
