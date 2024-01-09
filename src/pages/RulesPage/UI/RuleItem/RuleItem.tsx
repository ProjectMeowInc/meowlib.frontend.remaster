"use client"

import { FC, useState } from "react"
import classes from "./ruleItem.module.css"

interface IRuleProps {
    caption: string
    description: string
}

const RuleItem: FC<IRuleProps> = ({caption, description}) => {
    const [isActive, setIsActive] = useState<boolean>(false)

    return (
        <div className={isActive ? classes.active : classes.none_active} onClick={() => setIsActive(prevState => !prevState)}>
            <p className={isActive ? classes.caption_active : classes.caption}>{caption}</p>
            <p className={isActive ? classes.description_active : classes.description_none}>{description}</p>
        </div>
    )
}

export default RuleItem