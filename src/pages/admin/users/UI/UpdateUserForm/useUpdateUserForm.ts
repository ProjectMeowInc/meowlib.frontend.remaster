import {FormEvent, useState} from "react"
import {IOnChangeEvent} from "@/shared/models/events/IOnChangeEvent"
import {AlertService} from "@/shared/services/AlertService"
import {useRouter} from "next/navigation"
import {UserRoleEnum} from "@/entities/User/User";
import {UsersService} from "@/entities/Users/service/UsersService";
import {IUpdateUserDTO} from "@/entities/Users/models/dto/IUpdateUserDTO";

export const useUpdateUserForm = (id: number) => {
    const [data, setData] = useState<IUpdateUserDTO>({
        login: "",
        password: "",
        role: UserRoleEnum.User || UserRoleEnum.Admin || UserRoleEnum.Moderator || UserRoleEnum.Editor,
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
