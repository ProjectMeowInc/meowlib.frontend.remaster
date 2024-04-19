import { useState } from "react"
import { TranslationService } from "@/entities/Translation/services/TranslationService"
import { AlertService } from "@/shared/services/AlertService"

export const useAddTranslate = (teamId: number) => {
    const [modalIsActive, setModalIsActive] = useState<boolean>(true)

    const CreateTranslate = async (bookId: number) => {
        const result = await TranslationService.createTranslation(bookId, teamId)

        if (result.hasError()) {
            return AlertService.errorMessage(result.getError().errorMessage)
        }

        setModalIsActive(false)
    }

    return {
        modalIsActive,
        setModalIsActive,
        CreateTranslate,
    }
}
