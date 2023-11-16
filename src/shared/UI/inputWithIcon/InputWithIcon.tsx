import React from "react"
import classes from "./InputWithIcon.module.css"
import Image from "next/image"

interface IInputWithIconProps {
    onChange?: () => void
    placeholder: string
    styles?: {
        width?: string
    }
}

const InputWithIcon: React.FC<IInputWithIconProps> = ({ placeholder, onChange, styles }) => {
    return (
        <div className={classes.inp_with_icon__container}>
            <input
                placeholder={placeholder}
                className={classes.inp_with_icon}
                onChange={onChange}
                style={{ width: styles?.width }}
            />
            <Image src={"/img/1.png"} alt={""} className={classes.icon} width={19.23} height={19.23} />
        </div>
    )
}

export default InputWithIcon
