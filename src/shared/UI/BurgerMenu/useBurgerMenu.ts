import { useRouter } from "next/navigation"

export const useBurgerMenu = () => {

    const router = useRouter()

    //todo: change this
    const isAuth = true
    const isDisplayAdminRoutes = true

    return {
        isDisplayAdminRoutes,
        isAuth,
        router
    }
}
