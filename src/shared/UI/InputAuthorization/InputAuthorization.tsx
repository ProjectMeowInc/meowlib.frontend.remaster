import React from "react"
import classes from "./InputAuthorization.module.css"
import { IOnChangeEvent } from "@/shared/models/events/IOnChangeEvent"

/**
 * Описание интерфейса пропсов инпута авторизации
 * @param onChange принимает в себя интерфейс в котором описаны данные в веденные в инпут и привязка поля ввода для отправки на сервер
 * при срабатывании евента, а так же саму функцию
 * @param placeholder строка которая будет отображаться в инпуте
 * @param styles объект, принимает в себя стили используемые компонентом
 * @param value хранит в себе данные введенные пользователем
 * @param type тип самого инпута
 * @param name используется для "привязки" данных к отправляемому полю на сервер, например данные с инпута с полем name={'login'},
 * будут отправлены на сервер в виде login='введенные в инпут данные'
 * */
interface IInputAuthorizationProps {
    onChange?: (event: IOnChangeEvent) => void
    placeholder: string
    styles?: {
        margin: string
    }
    value?: string
    type?: string
    name: string

}

const InputAuthorization: React.FC<IInputAuthorizationProps> = ({
    placeholder,
    styles,
    value,
    type,
    name,
    onChange,
}) => {
    function changeHandler(event: IOnChangeEvent): void {
        onChange?.call(null, event)
    }

    return (
        <input
            placeholder={placeholder}
            className={classes.inp_auth}
            onChange={(event) =>
                changeHandler({
                    newValue: event.target.value,
                    name: name,
                })
            }
            style={{ margin: styles?.margin }}
            value={value}
            type={type}
            name={name}
        />
    )
}

export default InputAuthorization
