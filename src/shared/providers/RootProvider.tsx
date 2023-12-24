import { ToastContainer } from "react-toastify"
import { FC, PropsWithChildren } from "react"
import 'react-toastify/dist/ReactToastify.css';

const RootProvider: FC<PropsWithChildren> = ({children}) => {
    return (
        <div>
            {children}
            <ToastContainer/>
        </div>
    )
}

export default RootProvider