import React from "react"
import classes from "./SearchInput.module.css"

interface ISearchInputProps {
    placeholder: string
}

const SearchInput: React.FC<ISearchInputProps> = ({ placeholder }) => {
    return (
        <div className={classes.container}>
            <input className={classes.container} placeholder={placeholder} />
            <img src={"/img/10.png"} alt={""} />
        </div>
    )
}

export default SearchInput
