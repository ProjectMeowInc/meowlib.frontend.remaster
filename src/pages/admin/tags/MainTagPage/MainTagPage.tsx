import { TagService } from "@/entities/Tag/services/TagService"

const MainTagPage = async () => {

    const getTagsResult = await TagService.getAllAsync()

    if (getTagsResult.hasError()) {
        return <div>{getTagsResult.getError().errorMessage}</div>
    }

    const tags = getTagsResult.unwrap()

    return (
        <div>

        </div>
    )
}

export default MainTagPage