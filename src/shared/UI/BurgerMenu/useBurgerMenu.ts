import { TokenService } from "@/shared/services/TokenService"

export const useBurgerMenu = () => {
    //todo: change this
    const isAuth = TokenService.isLogIn()
    const isDisplayAdminRoutes = TokenService.isAdmin()

    return {
        isDisplayAdminRoutes,
        isAuth,
    }
}
