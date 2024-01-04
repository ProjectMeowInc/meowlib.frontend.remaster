import { usePathname, useRouter, useSearchParams } from "next/navigation"

export const useGetParams = () => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const setParam = (name: string, value: string) => {
        const currentParams = getCurrentParams()
        currentParams.set(name, value)
        router.push(encodeUrl(currentParams))
    }

    const removeParam = (name: string) => {
        const currentParams = getCurrentParams()
        currentParams.delete(name)
        router.push(encodeUrl(currentParams))
    }

    const getCurrentParams = (): URLSearchParams => {
        let currentParams
        if (searchParams) {
            currentParams = new URLSearchParams(Array.from(searchParams.entries()))
        } else {
            currentParams = new URLSearchParams()
        }
        return currentParams
    }

    const encodeUrl = (params: URLSearchParams): string => `${pathname}?${params.toString()}`

    return {
        setParam,
        removeParam,
        getCurrentParams,
    }
}
