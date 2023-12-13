import React from "react"
import classes from "./InputAuthorization.module.css"
import { IOnChangeEvent } from "@/shared/models/events/IOnChangeEvent"

interface IInputAuthorizationProps {
    /**
     * onChange - функция, которая будет вызвана при изменении данных
     */
    onChange?: (event: IOnChangeEvent) => void
    /**
     * placeholder - строка которая будет отображаться в инпуте
    */
    placeholder: string
    /**
     * styles - объект, принимает в себя стили используемые компонентом
     */
    styles?: {
        margin: string
    }
    /**
     * value - хранит в себе данные введенные пользователем
     */
    value?: string
    /**
     * type - тип самого инпута
     */
    type?: string
    /**
     * name - используется для "привязки" данных к отправляемому полю на сервер,
     * например данные с инпута с полем name={'login'},
     * будут отправлены на сервер в виде login='введенные в инпут данные'
     */
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
