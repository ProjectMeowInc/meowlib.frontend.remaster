import { PeopleService } from "@/entities/People/services/PeopleService"
import { useEffect, useState } from "react"
import { IPeopleDto } from "@/entities/People/models/dto/IPeopleDto"
import { AlertService } from "@/shared/services/AlertService"
import { useGetParams } from "@/shared/hooks/useGetParams"
import { useFirstLoadingAsync } from "@/shared/hooks/useFirstLoadingAsync"
import { LogService } from "@/shared/services/LogService"

export const usePeopleMainPage = () => {
    const [people, setPeople] = useState<IPeopleDto[]>()
    const [currentPage, setCurrentPage] = useState<number>(1)
    const {getCurrentParams, setParam, removeParam} = useGetParams()

    useFirstLoadingAsync(async () => {
        const currentParams = getCurrentParams()
        if (!currentParams.has("page")) {
            return setCurrentPage(1)
        }

        // инвариант: страница точно есть
        const currentPageParam = Number.parseInt(currentParams.get("page") ?? "0")
        setCurrentPage(currentPageParam)
    })

    useEffect(() => {
        PeopleService.getAllAsync(currentPage).then(result => {
            if (result.hasError()) {
                return AlertService.errorMessage(result.getError().errorMessage)
            }

            setPeople(result.unwrap())
        })
    }, [currentPage])

    const ChangePage = (offset: number) => {
        if (currentPage + offset < 1) {
            LogService.warning("Попытка перейти на минусовые страницы", "PeopleMainPage.ChangePage")
            return
        }

        const newPage = currentPage + offset
        setCurrentPage(newPage)
        setParam("page", newPage.toString())
    }

    const DeleteHandler = async (peopleId: number) => {
        const result = await PeopleService.deleteByIdAsync(peopleId)

        if (result.hasError()) {
            return AlertService.errorMessage(result.getError().errorMessage)
        }

        window.location.reload()
    }

    return {
        people,
        DeleteHandler,
        ChangePage
    }
}