import classes from "./rulesPage.module.css"
import RuleItem from "@/pages/RulesPage/UI/RuleItem/RuleItem"

const RulesPage = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.rules}>
                <h1>FAQ</h1>
                <RuleItem caption={"Что такое ранг?"} description={"Это топ-100 пользователей по уровню."} />
                <RuleItem
                    caption={"Что такое уровень?"}
                    description={"Это своего рода отсылка к RPG-играм, копишь опыт - получаешь уровень."}
                />
                <RuleItem
                    caption={"Что такое опыт?"}
                    description={"Это вознаграждение за добавление глав и ежедневный заход на сайт."}
                />
                <RuleItem
                    caption={"Почему опыт повышается не сразу?"}
                    description={"Статистика сайта обновляется раз в сутки."}
                />
                <RuleItem
                    caption={"Сколько по времени длится модерация?"}
                    description={
                        "От нескольких часов, до бесконечности. Сильно зависит от загруженности модераторов или уже ночь и все модераторы спят."
                    }
                />
                <RuleItem
                    caption={"Когда выйдет новая глава?"}
                    description={"Этот вопрос следует задавать переводчикам."}
                />
                <RuleItem caption={"Когда будет создано приложение?"} description={"Когда найдется разработчик."} />
                <RuleItem
                    caption={"Где искать главу после её скачивания?"}
                    description={"Скачанные главы хранятся в папке Download в любом файловом менеджере."}
                />
                <RuleItem
                    caption={"Можно ли удалить свой аккаунт на сайте?"}
                    description={"Нет, нельзя. Просто выйдите с аккаунта и забудьте о нём."}
                />
                <RuleItem
                    caption={"Что такое опыт?"}
                    description={"Это вознаграждение за добавление глав и ежедневный заход на сайт."}
                />
                <RuleItem
                    caption={"Что такое опыт?"}
                    description={"Это вознаграждение за добавление глав и ежедневный заход на сайт."}
                />
                <RuleItem
                    caption={"Что такое опыт?"}
                    description={"Это вознаграждение за добавление глав и ежедневный заход на сайт."}
                />
            </div>
        </div>
    )
}

export default RulesPage
