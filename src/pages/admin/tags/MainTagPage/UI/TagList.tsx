"use client"

import { ITagDTO } from "@/entities/Tag/models/dto/ITagDTO"
import classes from "./tagList.module.css"
import ListItem from "@/shared/UI/ListItem/ListItem"
import { FC } from "react"
import { useMainPageTag } from "@/pages/admin/tags/MainTagPage/useMainPageTag"

interface ITagListProps {
    tags: ITagDTO[]
}

const TagList: FC<ITagListProps> = ({ tags }) => {
    const { DeleteHandler } = useMainPageTag()

    return (
        <div className={classes.tags}>
            {tags.map((tag) => (
                <ListItem
                    key={tag.id}
                    id={tag.id}
                    text={tag.name}
                    href={`/${tag.id}`}
                    onDelete={async (id) => {
                        await DeleteHandler(id)
                    }}
                />
            ))}
        </div>
    )
}

export default TagList
