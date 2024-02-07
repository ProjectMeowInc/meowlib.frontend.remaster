import { FC } from "react"
import { BASE_API_URL } from "@/app/consts"

interface IAdaptiveImageProps {
    style?: {
        width?: string
        height?: string
    }
    className?: string
    url: string
}

const AdaptiveImage: FC<IAdaptiveImageProps> = ({ url, style, className }) => {
    return (
        <div
            className={className}
            style={{ ...style, backgroundImage: `url(${BASE_API_URL}/v1/images/${url})`, backgroundSize: "cover" }}
        ></div>
    )
}

export default AdaptiveImage
