import Cookie from "js-cookie"
import { IAccessTokenDto } from "@/entities/Auth/models/dto/AccessTokenDto"
import { Result } from "@/shared/services/Result/Result"
import { jwtDecode } from "jwt-decode"
import { IAccessTokenData } from "@/entities/Auth/models/dto/AccessTokenData"
import { LogService } from "@/shared/services/LogService"
import { UserRoleEnum } from "@/entities/User/models/UserEntity"

export class TokenService {
    static setAccessToken(accessToken: string) {
        Cookie.set("access_token", accessToken)
    }

    static setRefreshToken(refreshToken: string) {
        Cookie.set("refresh_token", refreshToken)
    }

    static parseAccessToken(token: string): Result<IAccessTokenDto> {
        const decodedToken = jwtDecode<IAccessTokenData>(token)
        if (!decodedToken.exp) {
            return Result.withError({
                errorMessage: "У токена нет времени истечения",
            })
        }

        const id = Number.parseInt(decodedToken.id)
        return Result.withOk({
            ...decodedToken,
            id,
            expiredTimestamp: decodedToken.exp,
        })
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

    static isLogIn(): boolean {
        // todo: change to normal check
        if (!TokenService.getAccessToken()) {
            return false
        }

        return true
    }

    static isAdmin(): boolean {
        const token = TokenService.getAccessToken()
        if (!token) {
            return false
        }

        const parseTokenResult = TokenService.parseAccessToken(token)
        if (parseTokenResult.hasError()) {
            LogService.error(`Ошибка парсинга токена: ${parseTokenResult.getError().errorMessage}`, "TokenService")
            return false
        }

        return parseTokenResult.unwrap().userRole === UserRoleEnum.Admin
    }
}
