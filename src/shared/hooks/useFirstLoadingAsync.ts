import { useEffect } from "react"

export const useFirstLoadingAsync = (callback: () => Promise<void>) => {
    useEffect(() => {
        callback.call(null).finally(() => {})
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}
