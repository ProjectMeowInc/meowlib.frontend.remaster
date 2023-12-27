import { FC } from "react"

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
        <div className={className} style={{ ...style, backgroundImage: `url(${url})`, backgroundSize: "cover" }}></div>
    )
}

export default AdaptiveImage
