import { useState } from "react"
import { TokenService } from "@/shared/services/TokenService"
import { UserBookStatus } from "@/entities/UserFavorite/UserBookStatuses"
import { UserFavoriteService } from "@/entities/UserFavorite/service/UserFavoriteService"
import { AlertService } from "@/shared/services/AlertService"
import { RedirectService } from "@/shared/services/RedirectService"
import { useFirstLoadingAsync } from "@/shared/hooks/useFirstLoadingAsync"

export const useSelectStatusButton = (bookId: number) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [selectedStatus, setSelectedStatus] = useState<UserBookStatus | null>(null)

    useFirstLoadingAsync(async () => {
        await GetBookStatus()
    })

    const ClickHandler = () => {
        setIsOpen((prevState) => !prevState)
    }

    //todo: надо решить, какой стиль именования функций
    // function vs const
    // CapitalizeName vs camelCase:
    // ClickHandler / clickHandler

    async function ClickStatusHandler(status: UserBookStatus): Promise<void> {
        const result = await UserFavoriteService.addBookInFavorite(bookId, status)

        if (!TokenService.isLogIn()) {
            RedirectService.redirectToAuthPage()
            return AlertService.errorMessage("Вам нужно авторизоваться")
        }

        if (result.hasError()) {
            return AlertService.errorMessage(result.getError().errorMessage)
        }

        AlertService.successMessage("Книга была добавлена")
        await GetBookStatus()
    }

    async function GetBookStatus() {
        const result = await UserFavoriteService.getBookInFavorite(bookId)

        if (result.hasError()) {
            return AlertService.errorMessage(result.getError().errorMessage)
        }

        return setSelectedStatus(result.unwrap().status)
    }

    return {
        ClickStatusHandler,
        ClickHandler,
        isOpen,
        selectedStatus,
    }
}
