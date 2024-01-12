import classes from "./lastReview.module.css"
import ReviewPreview from "@/pages/MainPage/UI/ReviewPreview/ReviewPreview"

const LastReviews = () => {
    return (
        <div className={classes.container}>
            <div className={classes.caption}>Последние ревью</div>
            <div>
                <ReviewPreview
                    name={"Очень очень очень длинное название"}
                    caption={"Очень очень очень длинное название"}
                    isPositive={true}
                    text={
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, soluta totam? Beatae consequatur ipsam quia veritatis vitae. Aliquam dolorum fuga impedit iusto libero maxime nesciunt, quaerat, ratione sit unde ut."
                    }
                />
                <ReviewPreview
                    name={"Класс превосходства"}
                    caption={"Лучшее из лучших"}
                    isPositive={true}
                    text={
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, soluta totam? Beatae consequatur ipsam quia veritatis vitae. Aliquam dolorum fuga impedit iusto libero maxime nesciunt, quaerat, ratione sit unde ut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, soluta totam? Beatae consequatur ipsam quia veritatis vitae. Aliquam dolorum fuga impedit iusto "
                    }
                />
                <ReviewPreview
                    name={"Класс превосходства"}
                    caption={"Лучшее из лучших"}
                    isPositive={true}
                    text={
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, soluta totam? Beatae consequatur ipsam quia veritatis vitae. Aliquam dolorum fuga impedit iusto libero maxime nesciunt, quaerat, ratione sit unde ut."
                    }
                />
                <ReviewPreview
                    name={"Класс превосходства"}
                    caption={"Лучшее из лучших"}
                    isPositive={true}
                    text={
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, soluta totam? Beatae consequatur ipsam quia veritatis vitae. Aliquam dolorum fuga impedit iusto libero maxime nesciunt, quaerat, ratione sit unde ut."
                    }
                />
                <ReviewPreview
                    name={"Класс превосходства"}
                    caption={"Лучшее из лучших"}
                    isPositive={true}
                    text={
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, soluta totam? Beatae consequatur ipsam quia veritatis vitae. Aliquam dolorum fuga impedit iusto libero maxime nesciunt, quaerat, ratione sit unde ut."
                    }
                />
            </div>
        </div>
    )
}

export default LastReviews
