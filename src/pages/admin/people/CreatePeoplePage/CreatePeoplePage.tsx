import CreatePeopleForm from "@/pages/admin/people/CreatePeoplePage/UI/CreatePeopleForm/CreatePeopleForm"
import classes from "./createPeoplePage.module.css"

const CreatePeoplePage = () => {
    return (
        <div className={classes.wrapper}>
            <CreatePeopleForm />
        </div>
    )
}

export default CreatePeoplePage
