import { useState } from "react"
import { TokenService } from "@/shared/services/TokenService"
import { UserBookStatus } from "@/entities/UserFavorite/UserBookStatuses"
import { UserFavoriteService } from "@/entities/UserFavorite/service/UserFavoriteService"
import { AlertService } from "@/shared/services/AlertService"
import { RedirectService } from "@/shared/services/RedirectService"

export const useSelectStatusButton = (bookId: number) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    //todo: надо решить, какой стиль именования функций
    // function vs const
    // CapitalizeName vs camelCase:
    // ClickHandler / clickHandler
    const ClickHandler = () => setIsOpen((prevState) => !prevState)

    async function ClickStatusHandler(status: UserBookStatus) {
        const result = await UserFavoriteService.addBookInFavorite(bookId, status)

        if (!TokenService.isLogIn()) {
            RedirectService.redirect("/auth")
            return AlertService.errorMessage("Вам нужно авторизоваться")
        }

        if (result.hasError()) {
            return AlertService.errorMessage(result.getError().errorMessage)
        }

        return AlertService.successMessage("Книга была добавлена")
    }

    return {
        ClickStatusHandler,
        ClickHandler,
        isOpen,
    }
}
