import {useEffect, useState} from "react"
import { TokenService } from "@/shared/services/TokenService"
import { UserBookStatus } from "@/entities/UserFavorite/UserBookStatuses"
import { UserFavoriteService } from "@/entities/UserFavorite/service/UserFavoriteService"
import { AlertService } from "@/shared/services/AlertService"
import { RedirectService } from "@/shared/services/RedirectService";

export const useSelectStatusButton = ( bookId: number ) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [selectedStatus, setSelectedStatus] = useState<UserBookStatus | null>(null)

    const ClickHandler = () => {
        setIsOpen((prevState) => !prevState)
    }

    //todo: надо решить, какой стиль именования функций
    // function vs const
    // CapitalizeName vs camelCase:
    // ClickHandler / clickHandler

    async function ClickStatusHandler ( status: UserBookStatus ) {
        const result = await UserFavoriteService.addBookInFavorite(bookId, status)

        if (!TokenService.isLogIn()) {
            RedirectService.redirectToAuthPage()
            return AlertService.errorMessage('Вам нужно авторизоваться')
        }

        if (result.hasError()) {
            return AlertService.errorMessage(result.getError().errorMessage)
        }

        return AlertService.successMessage("Книга была добавлена")
    }

    async function GetBookStatus() {
        const result = await UserFavoriteService.getBookInFavorite(bookId)

        if (result.hasError()) {
            return AlertService.errorMessage(result.getError().errorMessage)
        }

       return setSelectedStatus(result.unwrap().status)
    }

    useEffect(() => {
        GetBookStatus()
    }, [bookId])

    return {
        ClickStatusHandler,
        ClickHandler,
        isOpen,
        selectedStatus
    }
}
