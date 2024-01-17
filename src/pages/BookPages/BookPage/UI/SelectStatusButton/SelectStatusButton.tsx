import React, {FC} from "react"
import { UserBookStatus, UserBookStatuses } from "@/entities/UserFavorite/UserBookStatuses"
import classes from "./selectStatusButton.module.css"
import { useSelectStatusButton } from "@/pages/BookPages/BookPage/UI/SelectStatusButton/useSelectStatusButton"
import Button from "@/shared/UI/button/Button"

interface ISelectStatusButtonProps {
    bookId: number
    selectedStatus: UserBookStatus | null
    onStatusChanged?: (updateStatus: UserBookStatus) => void
}

const SelectStatusButton: FC<ISelectStatusButtonProps> = ({ bookId, selectedStatus }) => {
    const { ClickStatusHandler, ClickHandler, isOpen  } = useSelectStatusButton(bookId)

    return (
        <div className={classes.wrapper}>
            <Button onClick={ ClickHandler } styles={{ margin: "15px" }}>
                Изменить статус
            </Button>
            <div className={isOpen ? classes.select_list_active : classes.select_list}>
                {UserBookStatuses.map((status: UserBookStatus) => (
                    <p key={""} className={classes.select_list_item} onClick={() => ClickStatusHandler(status)}>
                        {status}
                    </p>
                ))}
            </div>
            <div className={classes.selected_status}>
                {selectedStatus
                    ? <p>Текущий статус: {selectedStatus}</p>
                    : <p>Статус отсутствует</p>
                }
            </div>
        </div>
    )
}

export default SelectStatusButton
