export const CoinReasons = ["AdminAddition", "UserAddition", "BuyChapter"] as const

export type CoinReason = (typeof CoinReasons)[number]

export function getCoinReason(reason: CoinReason): string {
    switch (reason) {
        case "AdminAddition":
            return "выдано администратором"
        case "UserAddition":
            return "за покупку"
        case "BuyChapter":
            return "за покупку главы"
    }
}
