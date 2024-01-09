export const usePage = () => {
    const reload = () => {
        window.location.reload()
    }

    return {
        reload,
    }
}
