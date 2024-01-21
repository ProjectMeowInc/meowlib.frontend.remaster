export const useUpdateCoinListItem = () => {
    const getTime = (date: string) => {
        return date.split("T")[1].split(".")[0].substring(0, 5)
    }

    return {
        getTime,
    }
}
