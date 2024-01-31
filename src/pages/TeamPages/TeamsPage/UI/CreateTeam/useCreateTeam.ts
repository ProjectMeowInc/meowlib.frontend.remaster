import { useState } from "react"
import { useFirstLoading } from "@/shared/hooks/useFirstLoading"
import { TokenService } from "@/shared/services/TokenService"

export const useCreateTeam = () => {

    const [formIsActive, setFormIsActive] = useState<boolean>(false)
    const [userIsLogin, setUserIsLogin] = useState<boolean>(false)


    useFirstLoading(() => {
        const token = TokenService.getAccessToken()

        if (token) {
            setUserIsLogin(true)
        }
    })

    return {
        formIsActive,
        setFormIsActive,
        userIsLogin,
    }
}