import React, { useState } from "react"
import { ISignInRequest } from "@/entities/Auth/models/requests/SignInRequests"
import { AuthService } from "@/entities/Auth/service/AuthService"
import { AlertService } from "@/shared/services/AlertService"
import {IOnChangeEvent} from "@/shared/models/events/IOnChangeEvent";

export const useRegistration = () => {
    const [formData, setFormData] = useState<ISignInRequest>({
        login: "",
        password: "",
    })

    const handleInputChange = (event: IOnChangeEvent) => {
        const { name, value } = event.newValue
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }))
    }

    async function handleSubmit(event: React.FormEvent): Promise<void> {
        event.preventDefault()
        const result = await AuthService.registration(formData.login, formData.password)

        console.log(formData)

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
        formData,
        handleInputChange,
        handleSubmit,
    }
}
