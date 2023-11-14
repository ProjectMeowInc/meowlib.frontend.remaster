import Cookie from "js-cookie"

export class TokenService {

    static setAccessToken(accessToken: string) {
        Cookie.set("access_token", accessToken)
    }

    static setRefreshToken(refreshToken: string) {
        Cookie.set("refresh_token", refreshToken)
    }

    static getAccessToken(): string | null {
        const accessToken = Cookie.get("access_token")

        if (!accessToken) {
            return null
        }

        return accessToken
    }

    static getRefreshToken(): string | null {
        const refreshToken = Cookie.get("refresh_token")

        if (!refreshToken) {
            return null
        }

        return refreshToken
    }
}