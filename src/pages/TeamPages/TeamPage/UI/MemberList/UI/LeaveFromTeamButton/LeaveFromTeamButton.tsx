"use client"

import classes from "./leaveFromTeamButton.module.css"
import {
    useLeaveFromTeamButton
} from "@/pages/TeamPages/TeamPage/UI/MemberList/UI/LeaveFromTeamButton/useLeaveFromTeamButton"

const LeaveFromTeamButton = () => {

    const {LeaveFromTeam} = useLeaveFromTeamButton()

    //todo: Сделать подтверждение на покидание команды
    
    return (
        <div onClick={async () => await LeaveFromTeam()} className={classes.leave}>
            Покинуть команду
        </div>
    )
}

export default LeaveFromTeamButton