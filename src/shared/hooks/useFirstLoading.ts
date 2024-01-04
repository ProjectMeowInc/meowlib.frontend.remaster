import { useEffect } from "react"

export const useFirstLoading = (callback: () => void) => {
    useEffect(() => {
        callback.call(null)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}
