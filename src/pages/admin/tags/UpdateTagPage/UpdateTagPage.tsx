import { FC } from "react"
import { TagService } from "@/entities/Tag/services/TagService"
import EmptyTag from "@/shared/UI/EmptyTag/EmptyTag"
import UpdateTagForm from "@/pages/admin/tags/UpdateTagPage/UpdateTagForm/UpdateTagForm"
import classes from "./updateTagPage.module.css"

interface IUpdateTagPageProps {
    params: {
        tagId: number
    }
}

const UpdateTagPage: FC<IUpdateTagPageProps> = async ({ params: { tagId } }) => {
    const getTagResult = await TagService.getByIdAsync(tagId)

    if (getTagResult.hasError()) {
        return <EmptyTag>{getTagResult.getError().errorMessage}</EmptyTag>
    }

    const tag = getTagResult.unwrap()

    return (
        <div className={classes.wrapper}>
            <UpdateTagForm tag={tag} />
        </div>
    )
}

export default UpdateTagPage
