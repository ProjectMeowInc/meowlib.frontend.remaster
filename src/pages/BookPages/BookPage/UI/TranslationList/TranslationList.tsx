import classes from "./translationList.module.css"
import {FC} from "react";

interface ITranslationListProps {
    translations: {
        id: number
        name: string
    }[]
}

const TranslationList: FC<ITranslationListProps> = ({translations}) => {

    if (!translations.length) {
        return (
            <div className={classes.no_translation}>
                Переводы отсутствуют
            </div>
        )
    }

    return (
        <div>
            {
                translations.map(translation => (
                    <div
                        key={translation.id}
                        className={classes.translation_item}
                    >
                        {translation.name}
                    </div>
                ))
            }
        </div>
    );
};

export default TranslationList;