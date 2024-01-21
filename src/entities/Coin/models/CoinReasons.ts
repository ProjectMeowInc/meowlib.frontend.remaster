export const CoinReasons = ["AdminAddition", "UserAddition", "BuyChapter"] as const

export type CoinReason = (typeof CoinReasons)[number]

export function getCoinReason(reason: CoinReason): string {
    switch (reason) {
        case "AdminAddition":
            return "выдачу администратора"
        case "UserAddition":
            return "покупку"
        case "BuyChapter":
            return "покупку главы"
    }
}
