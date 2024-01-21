export const UserBookStatuses = ["InPlans", "ReadingNow", "Favourite", "Read"] as const

export type UserBookStatus = (typeof UserBookStatuses)[number]

export function getPrettyBookStatusName(status: UserBookStatus): string {
    switch (status) {
        case "InPlans":
            return "В планах"
        case "ReadingNow":
            return "Читаю"
        case "Favourite":
            return "Любимое"
        case "Read":
            return "Прочитано"
    }
}
