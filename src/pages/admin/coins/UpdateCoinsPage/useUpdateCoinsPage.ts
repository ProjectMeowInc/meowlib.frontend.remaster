import { FormEvent, useState } from "react"
import { IUpdateCoinsRequest } from "@/entities/Coin/models/requests/IUpdateCoinsRequest"
import { AlertService } from "@/shared/services/AlertService"
import { CoinService } from "@/entities/Coin/service/CoinService"
import { IOnChangeEvent } from "@/shared/models/events/IOnChangeEvent"

export const useUpdateCoinsPage = () => {
    const [info, setInfo] = useState<IUpdateCoinsRequest>({
        userId: 0,
        updateCoins: 0,
    })

    const SubmitInfoHandler = async (e: FormEvent) => {
        e.preventDefault()

        const result = await CoinService.updateCoins(info.userId, info.updateCoins)

        if (result.hasError()) {
            return AlertService.errorMessage(result.getError().errorMessage)
        }

        return AlertService.successMessage("Монеты успешно обновлены")
    }

    const ChangeInfoHandler = ({ name, newValue }: IOnChangeEvent) => {
        setInfo((prevState) => ({
            ...prevState,
            [name]: newValue,
        }))
    }

    return {
        SubmitInfoHandler,
        ChangeInfoHandler,
    }
}
