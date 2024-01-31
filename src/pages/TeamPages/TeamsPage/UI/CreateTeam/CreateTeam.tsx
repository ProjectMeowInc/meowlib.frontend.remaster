"use client"

import { useCreateTeam } from "@/pages/TeamPages/TeamsPage/UI/CreateTeam/useCreateTeam"
import CreateTeamForm from "@/pages/TeamPages/TeamsPage/UI/CreateTeam/UI/CreateForm/CreateTeamForm"
import classes from "./createTeam.module.css"

const CreateTeam = () => {

    const {formIsActive, setFormIsActive, userIsLogin} = useCreateTeam()

    return (
        <div className={classes.wrapper}>
            <div className={classes.button} onClick={() => setFormIsActive(prevState => !prevState)}>
                Создать команду
            </div>

            {userIsLogin && formIsActive && <CreateTeamForm/>}
            {!userIsLogin && formIsActive && <p>
                Войдите чтобы создать команду
            </p>}
        </div>
    )
}

export default CreateTeam