import HeaderLink from "@/features/HeaderLink";
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

const AdviceHeader = () => {

    const [inProp, setInProp] = useState(false);

    useEffect(() => {
        setInProp(true)
        return () => {
            setInProp(false)
        }
    }, [])

    return (
            <CSSTransition
                timeout={500}
                classNames={'advice-header'}
                in={inProp}
                unmountOnExit
            >
                <header className="z-[9] bg-card rounded-3xl whitespace-nowrap shadow-lg flex gap-2 justify-evenly items-center">
                    <HeaderLink to='/advice/materials'>
                        Подборка
                    </HeaderLink>
                    <HeaderLink to='/advice/gluing'>
                        Склейка
                    </HeaderLink>
                    <HeaderLink to='/advice/staining'>
                        Морение
                    </HeaderLink>
                    <HeaderLink to='/advice/varnish'>
                        Лакирование
                    </HeaderLink>
                    <HeaderLink to='/advice/storage'>
                        Хранение
                    </HeaderLink>
                    <HeaderLink to='/advice/care'>
                        Уход
                    </HeaderLink>
                </header>
            </CSSTransition>

    )
}

export default AdviceHeader;