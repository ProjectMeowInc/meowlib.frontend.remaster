"use client"

import classes from "./addTranslateButton.module.css"
import { FC } from "react"
import { useAddTranslate } from "@/pages/TeamPages/TeamPage/UI/BookList/UI/AddTranslateButton/useAddTranslate"
import TeamBookModal from "@/pages/TeamPages/TeamPage/UI/TeamBookModal/TeamBookModal"

interface IAddTranslateButtonProps {
    teamId: number
}

const AddTranslateButton: FC<IAddTranslateButtonProps> = ({ teamId }) => {
    const { modalIsActive } = useAddTranslate(teamId)

    return (
        <div className={classes.container}>
            {modalIsActive && <TeamBookModal teamId={teamId} />}
            <p>Создать перевод</p>
        </div>
    )
}

export default AddTranslateButton
