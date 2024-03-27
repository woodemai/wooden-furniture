import { Loader2 } from "lucide-react";

const LoadingLayout = () => {

    return (
        <div className="w-full h-full flex justify-center items-center">
            <Loader2 className="animate-spin" size={64} />
        </div>
    )
}

export default LoadingLayout;