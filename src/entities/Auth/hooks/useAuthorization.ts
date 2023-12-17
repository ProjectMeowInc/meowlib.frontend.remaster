import React, { useState } from "react"
import { AuthService } from "@/entities/Auth/service/AuthService"
import { AlertService } from "@/shared/services/AlertService"
import { ILogInRequest } from "@/entities/Auth/models/requests/LogInRequest"
import { TokenService } from "@/shared/services/TokenService"
import { IOnChangeEvent } from "@/shared/models/events/IOnChangeEvent"

export const useAuthorization = () => {
    const [formData, setFormData] = useState<ILogInRequest>({
        login: "",
        password: "",
        isLongSession: false,
    })


    const handleInputChange = (event: IOnChangeEvent) => {
        const { name, newValue } = event
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: newValue,
        }))
    }

    async function handleSubmit(event: React.FormEvent): Promise<void> {
        event.preventDefault()
        const result = await AuthService.authorization(formData)

        if (result.hasError()) {
           return AlertService.errorMessage(result.getError().errorMessage)
        }

        const loginData = result.unwrap()
        TokenService.setAccessToken(loginData.accessToken)
        TokenService.setRefreshToken(loginData.refreshToken)

        return AlertService.successMessage("Вы успешно вошли")

    }

    function handleCheckbox(state: boolean) {
        setFormData(prevState => ({
            ...prevState,
            isLongSession: state
        }))
    }

    return {
        handleCheckbox,
        handleInputChange,
        handleSubmit,
    }
}
