import { FormEvent, useState } from "react"
import { IOnChangeEvent } from "@/shared/models/events/IOnChangeEvent"
import { AlertService } from "@/shared/services/AlertService"
import { useRouter } from "next/navigation"
import { UsersService } from "@/entities/User/service/UsersService"
import { IUpdateUserDTO } from "@/entities/User/models/dto/IUpdateUserDTO"
import { UserRoleEnum } from "@/entities/User/models/UserEntity"

export const useUpdateUserForm = (id: number) => {
    const [data, setData] = useState<IUpdateUserDTO>({
        login: "",
        password: "",
        role: UserRoleEnum.User,
    })

    const router = useRouter()

    const ChangeHandler = ({ name, newValue }: IOnChangeEvent) => {
        setData((prevState) => ({
            ...prevState,
            [name]: newValue,
        }))
    }

    const SubmitHandler = async (e: FormEvent) => {
        e.preventDefault()

        const result = await UsersService.updateUserById(id, data)

        if (result.hasError()) {
            return AlertService.errorMessage(result.getError().errorMessage)
        }

        router.back()
        router.refresh()
        return AlertService.successMessage("Пользователь успешно обновлён")
    }

    return {
        ChangeHandler,
        SubmitHandler,
    }
}
