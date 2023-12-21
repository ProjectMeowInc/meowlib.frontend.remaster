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

    const updateCommentsAsync = async () => {
        // todo: add fetch data
        setComments([
            {
                id: 1,
                author: {
                    id: 1,
                    login: "tester",
                    role: UserRoleEnum.User
                },
                text: "Comment text",
                postedAt: new Date()
            },
            {
                id: 2,
                author: {
                    id: 2,
                    login: "Admin",
                    role: UserRoleEnum.Admin
                },
                text: "Comment text",
                postedAt: new Date()
            }
        ])
    }

    return {
        comments
    }
}