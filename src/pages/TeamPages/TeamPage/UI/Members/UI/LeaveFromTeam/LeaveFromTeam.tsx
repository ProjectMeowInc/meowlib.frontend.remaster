"use client"

import { useLeaveFromTeam } from "@/pages/TeamPages/TeamPage/UI/Members/UI/LeaveFromTeam/useLeaveFromTeam"
import classes from "./leaveFromTeam.module.css"

const LeaveFromTeam = () => {

    const {LeaveFromTeam} = useLeaveFromTeam()

    //todo: Сделать подтверждение на покидание команды
    
    return (
        <div onClick={async () => await LeaveFromTeam()} className={classes.leave}>
            Покинуть команду
        </div>
    )
}

export default LeaveFromTeam