import { useOutlet } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import { CSSTransition } from "react-transition-group";
import { useState, useEffect } from "react";

const AdviceLayout = () => {

    const outlet = useOutlet()

    const [inProp, setInProp] = useState(false);

    useEffect(() => {
        setInProp(true)
        return () => {
            setInProp(false)
        }
    }, [])

    return (
        <>
            {outlet ||
                <CSSTransition
                    timeout={500}
                    classNames={'advice-layout'}
                    in={inProp}
                    unmountOnExit
                >
                    <div className="w-full h-full mt-8 flex justify-center items-center flex-col gap-8">
                        <ArrowUp size={60} />
                        <h1 className="text-3xl font-bold tracking-tight">Выберите категорию</h1>
                    </div>
                </CSSTransition>
            }
        </>
    )
}

export default AdviceLayout;