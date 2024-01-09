import { useState } from "react"

export const useNavAuth = () => {
    const [isRegPage, setIsRegPage] = useState<boolean>(false)

    return {
        isRegPage,
        setIsRegPage,
    }
}
