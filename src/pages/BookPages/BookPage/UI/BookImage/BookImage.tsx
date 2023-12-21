import AdaptiveImage from "@/shared/UI/AdaptiveImage/AdaptiveImage"
import { FC } from "react"

interface IBookImageProps {
    image: string
    className: string
}

const BookImage: FC<IBookImageProps> = ({ image, className }) => {
    return (
        <div className={className}>
            <AdaptiveImage url={image} />
        </div>
    )
}

export default BookImage
