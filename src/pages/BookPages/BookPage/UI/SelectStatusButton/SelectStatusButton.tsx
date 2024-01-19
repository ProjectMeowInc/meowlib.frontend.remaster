"use client"

import React, { FC } from "react"
import {getPrettyBookStatusName, UserBookStatus, UserBookStatuses} from "@/entities/UserFavorite/UserBookStatuses"
import classes from "./selectStatusButton.module.css"
import { useSelectStatusButton } from "@/pages/BookPages/BookPage/UI/SelectStatusButton/useSelectStatusButton"
import Button from "@/shared/UI/button/Button"
import Image from "next/image"
import icon from "@/public/img/icons/chevron-down.png"

interface ISelectStatusButtonProps {
    bookId: number
}

const SelectStatusButton: FC<ISelectStatusButtonProps> = ({ bookId }) => {
    const { ClickStatusHandler, ClickHandler, isOpen, selectedStatus } = useSelectStatusButton(bookId)

    return (
        <div className={classes.wrapper}>
            <Button onClick={ClickHandler} className={classes.btn}>
                {selectedStatus
                    ? getPrettyBookStatusName(selectedStatus)
                    : "Добавить в список"
                }
                <Image className={isOpen ? classes.down_active : classes.down} src={icon} alt={"arrow-down-icon"}/>
            </Button>
            <div className={isOpen ? classes.select_list_active : classes.select_list}>
                {UserBookStatuses.map((status: UserBookStatus, index) => (
                        <p key={index} className={classes.select_list_item} onClick={() => ClickStatusHandler(status)}>
                            {getPrettyBookStatusName(status)}
                        </p>
                    ))}

            </div>
        </div>
    )
}

export default SelectStatusButton
