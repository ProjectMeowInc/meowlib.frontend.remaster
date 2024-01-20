export const CoinReasons = ["AdminAddition", "UserAddition", "BuyChapter"] as const

export type CoinReason = (typeof CoinReasons)[number]
