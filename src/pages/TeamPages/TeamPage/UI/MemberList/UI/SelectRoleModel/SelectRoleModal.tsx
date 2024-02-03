"use client"

import React, { FC } from "react"
import classes from "./selectRoleModal.module.css"
import { TeamRoleType } from "@/entities/Team/types/TeamRoleType"
import Image from "next/image"
import Button from "@/shared/UI/button/Button"

import defaultImage from "@/public/img/defaultImage.png"
import { useSelectRoleModal } from "@/pages/TeamPages/TeamPage/UI/MemberList/UI/SelectRoleModel/useSelectRoleModal"

interface ISelectRoleModalProps {
    id: number
    login: string
    role: TeamRoleType
    onClick: () => void
}

const SelectRoleModal: FC<ISelectRoleModalProps> = ({id, role, login, onClick}) => {

    const {SubmitHandler, setRequestData} = useSelectRoleModal(role, onClick)

    return (
        <div className={classes.modal}>
            <div className={classes.card}>
                <Image src={defaultImage} alt={"avatar"} width={50} height={50} className={classes.avatar}/>
                <div className={classes.info}>
                    <p>{login}</p>
                    <select name={"newRole"} onChange={(event) => setRequestData(event.target.value as TeamRoleType)}>
                        <option onClick={() => setRequestData("Standard")} value="Standard">Standard</option>
                        <option onClick={() => setRequestData("Admin")} value={"Admin"}>Admin</option>
                        <option onClick={() => setRequestData("Translator")} value={"Translator"}>Translator</option>
                        <option onClick={() => setRequestData("Redactor")} value={"Redactor"}>Redactor</option>
                    </select>
                </div>
                <Button onClick={() => SubmitHandler(id)}>
                    Сохранить
                </Button>
            </div>
        </div>
    )
}

export default SelectRoleModal