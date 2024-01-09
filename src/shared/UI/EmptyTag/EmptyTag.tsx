import { FC, PropsWithChildren } from "react"

const EmptyTag: FC<PropsWithChildren> = ({ children }) => {
    return <>{children}</>
}

export default EmptyTag
