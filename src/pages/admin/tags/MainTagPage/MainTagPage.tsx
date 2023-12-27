import { TagService } from "@/entities/Tag/services/TagService"
import AdminCreateButton from "@/pages/admin/UI/AdminCreateButton/AdminCreateButton"
import classes from "./mainTagPage.module.css"
import TagList from "@/pages/admin/tags/MainTagPage/UI/TagList"

const MainTagPage = async () => {
    const getTagsResult = await TagService.getAllAsync()

    if (getTagsResult.hasError()) {
        return <div>{getTagsResult.getError().errorMessage}</div>
    }

    const tags = getTagsResult.unwrap()

    return (
        <div className={classes.wrapper}>
            <AdminCreateButton text={"Создать тег"} href={"/new"} />
            <TagList tags={tags} />
        </div>
    )
}

export default MainTagPage
