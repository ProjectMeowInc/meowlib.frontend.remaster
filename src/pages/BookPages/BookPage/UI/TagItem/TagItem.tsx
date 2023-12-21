import {FC} from "react";

interface ITagItemProps {
    id: number
    name: string
}

const TagItem: FC<ITagItemProps> = ({name}) => {
    return (
        <div>
            {name}
        </div>
    );
};

export default TagItem;