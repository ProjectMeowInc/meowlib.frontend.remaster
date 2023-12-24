import {useEffect, useState} from "react";
import {ICommentDto} from "@/entities/BookComments/models/dto/ICommentDto";
import {LogService} from "@/shared/services/LogService";
import {UserRoleEnum} from "@/entities/User/User";

export const useCommentList = () => {
    const [comments, setComments] = useState<ICommentDto[] | null>(null)

    useEffect(() => {
        updateCommentsAsync()
            .then(() => {
                LogService.info("Коментарии обновленны", "useCommentList")
            })
    }, []);

    const updateCommentsAsync = async () => {}

    return {
        comments
    }
}