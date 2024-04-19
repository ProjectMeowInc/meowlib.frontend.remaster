"use client"

import classes from "./teamBookModal.module.css"
import { FC } from "react"
import { useTeamBookModal } from "@/pages/TeamPages/TeamPage/UI/TeamBookModal/useTeamBookModal"
import Preloader from "@/pages/admin/UI/Preloader/Preloader"
import BookPreview from "@/pages/MainPage/UI/BookPreview/BookPreview"

interface ITeamBookModalProps {
    onSelectBook?: (bookId: number) => void
    teamId: number
}

const TeamBookModal: FC<ITeamBookModalProps> = ({ onSelectBook, teamId }) => {
    const { books } = useTeamBookModal(teamId)

    if (!books) {
        return <Preloader />
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.modal}>
                <h1>Выберите книгу</h1>

                <div className={classes.books}>
                    {books.map((b) => (
                        <BookPreview
                            key={b.id}
                            id={b.id}
                            image={b.image}
                            name={b.name}
                            onClick={() => onSelectBook?.call(null, b.id)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TeamBookModal
