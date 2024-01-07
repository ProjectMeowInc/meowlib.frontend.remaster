import {useEffect, useState} from "react";
import {ITagDTO} from "@/entities/Tag/models/dto/ITagDTO";
import {TagService} from "@/entities/Tag/services/TagService";
import {AlertService} from "@/shared/services/AlertService";

export const useAddBookTagList = () => {
    const [tags, setTags] = useState<ITagDTO[]>()

    useEffect(() => {
        TagService.getAllAsync().then((result) => {
            if (result.hasError()) {
                return AlertService.errorMessage(result.getError().errorMessage)
            }

            setTags(result.unwrap())
        })
    }, []);

    return {
        tags,
    }
}