import { PeopleService } from "@/entities/People/services/PeopleService"
import { useEffect, useState } from "react"
import { IPeopleDto } from "@/entities/People/models/dto/IPeopleDto"
import { AlertService } from "@/shared/services/AlertService"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

export const usePeopleMainPage = () => {

    const [people, setPeople] = useState<IPeopleDto[]>()
    const [pageNumber, setPageNumber] = useState<number>(1)
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const params = new URLSearchParams()
    const router = useRouter()

    useEffect(() => {
        if (searchParams) {
            setPageNumber(Number(searchParams.get("page")) ?? 1)
        }

        if (!searchParams) {
            params.set("page", "1")
        }

        PeopleService.getAllAsync(pageNumber).then(result => {
            if (result.hasError()) {
                return AlertService.errorMessage(result.getError().errorMessage)
            }

            setPeople(result.unwrap())
        })
    }, [pageNumber])

    const SwapPage = () => {
        params.set("page", pageNumber.toString())
        const query = `${pathname}?${params.toString()}`
        router.push(query)
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
        setPageNumber,
        SwapPage,
        DeleteHandler
    }
}