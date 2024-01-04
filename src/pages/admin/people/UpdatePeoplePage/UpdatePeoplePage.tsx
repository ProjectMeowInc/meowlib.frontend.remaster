import { FC } from "react"
import { PeopleService } from "@/entities/People/services/PeopleService"
import EmptyTag from "@/shared/UI/EmptyTag/EmptyTag"
import UpdatePeopleForm from "@/pages/admin/people/UpdatePeoplePage/UI/UpdatePeopleForm/UpdatePeopleForm"
import classes from "./updatePeoplePage.module.css"

interface IUpdatePeoplePageProps {
    params: {
        peopleId: number
    }
}

const UpdatePeoplePage: FC<IUpdatePeoplePageProps> = async ({ params: { peopleId } }) => {
    const result = await PeopleService.getByIdAsync(peopleId)

    if (result.hasError()) {
        return <EmptyTag>{result.getError().errorMessage}</EmptyTag>
    }

    const people = result.unwrap()

    return (
        <div className={classes.wrapper}>
            <UpdatePeopleForm id={people.id} name={people.name} />
        </div>
    )
}

export default UpdatePeoplePage
