import React, { FC } from "react"
import { UserBookStatus, UserBookStatuses } from "@/entities/UserFavorite/UserBookStatuses"
import classes from "./selectStatusButton.module.css"
import { useSelectStatusButton } from "@/pages/BookPages/BookPage/UI/SelectStatusButton/useSelectStatusButton"
import Button from "@/shared/UI/button/Button"

interface ISelectStatusButton {
    bookId: number
    selectedStatus: UserBookStatus | null
    onStatusChanged?: (updateStatus: UserBookStatus) => void
}

const SelectStatusButton: FC<ISelectStatusButton> = ({ bookId, selectedStatus }) => {
    const { ClickStatusHandler, ClickHandler, isOpen } = useSelectStatusButton(bookId)

    return (
        <div className={classes.wrapper}>
            <Button onClick={ClickHandler} styles={{ margin: "15px" }}>
                Изменить статус
            </Button>
            <div className={isOpen ? classes.select_list_active : classes.select_list}>
                {UserBookStatuses.map((status: UserBookStatus) => (
                    <p key={""} className={classes.select_list_item} onClick={() => ClickStatusHandler(status)}>
                        {status}
                    </p>
                ))}
            </div>
            <div className={classes.selected_status}>Текущий статус: {selectedStatus}</div>
        </div>
    )
}

export default SelectStatusButton
