import { useLocation, useOutlet } from "react-router-dom";
import AdviceHeader from "./AdviceHeader";
import { CSSTransition, SwitchTransition } from "react-transition-group";

const AdviceLayout = () => {

    const outlet = useOutlet()
    const location = useLocation()

    return (
        <>
            <AdviceHeader/>
            <SwitchTransition>
                <CSSTransition
                    key={location.pathname}
                    timeout={300}
                    classNames={'page'}
                    unmountOnExit
                >
                    {() => (
                        <div>
                            {outlet || <div className="w-full h-full mt-8 flex justify-center items-center">
                                <h1 className="text-3xl font-bold tracking-tight">Выберите категорию</h1>
                            </div>}
                        </div>
                    )}
                </CSSTransition>
            </SwitchTransition>
        </>
    )
}

export default AdviceLayout;