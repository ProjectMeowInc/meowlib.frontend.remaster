import { useState } from "react"

export const useBurgerButton = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleChangeStateClose = () => {
        setIsOpen(prevState => !prevState)
    }

    return {
        isOpen,
        handleChangeStateClose
    }
}