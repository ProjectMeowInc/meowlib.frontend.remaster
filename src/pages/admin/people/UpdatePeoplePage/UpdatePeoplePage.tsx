import { FC } from "react"
import { PeopleService } from "@/entities/People/services/PeopleService"
import EmptyTag from "@/shared/UI/EmptyTag/EmptyTag"

interface IUpdatePeoplePageProps {
    params: {
        peopleId: number
    }
}

const UpdatePeoplePage: FC<IUpdatePeoplePageProps> = async ({params: {peopleId}}) => {

    const result = await PeopleService.getByIdAsync(peopleId)

    if (result.hasError()) {
        return <EmptyTag>{result.getError().errorMessage}</EmptyTag>
    }

    const people = result.unwrap()

    return (
        <div>

        </div>
    )
}

export default UpdatePeoplePage