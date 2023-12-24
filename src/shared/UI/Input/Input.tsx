"use client"

import React, { FC } from "react"
import classes from "./input.module.css"
import { IOnChangeEvent } from "@/shared/models/events/IOnChangeEvent"

interface IInputProps {
    placeholder?: string
    type?: "email" | "text" | "password"
    onChange?: (event: IOnChangeEvent) => void
    name: string
    style?: {
        margin?: number
        width?: number
    }
}

const Input: FC<IInputProps> = ({placeholder, type, onChange, style, name}) => {

    const changeHandler = (event: IOnChangeEvent) => {
        onChange?.call(null, event)
    }

    return (
        <input
            name={name}
            className={classes.input}
            style={{
                width: `${style?.width}%`,
                margin: style?.margin
            }}
            placeholder={placeholder}
            type={type}
            onChange={(e) => changeHandler({
                name: e.target.name,
                newValue: e.target.value
            })}
        />
    )
}

export default Input