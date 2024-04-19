import React, { useState } from "react"
import { ISignInRequest } from "@/entities/Auth/models/requests/SignInRequests"
import { IOnChangeEvent } from "@/shared/models/events/IOnChangeEvent"
import { AuthService } from "@/entities/Auth/service/AuthService"
import { AlertService } from "@/shared/services/AlertService"

export const useRegistrationForm = () => {
    const [formData, setFormData] = useState<ISignInRequest>({
        login: "",
        password: "",
    })

    const handleInputChange = (event: IOnChangeEvent) => {
        const { name, newValue } = event
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: newValue,
        }))
    }

    const handleSubmit = async (event: React.FormEvent): Promise<void> => {
        event.preventDefault()
        const result = await AuthService.registration(formData.login, formData.password)

        setFormData({
            login: "",
            password: "",
        })

        if (result.hasError()) {
            AlertService.errorMessage(result.getError().errorMessage)
        }

        return AlertService.successMessage("Вы успешно зарегистрировались")
    }

    return {
        handleInputChange,
        handleSubmit,
    }
}
