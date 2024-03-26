import Footer from "@/widgets/footer/Footer";
import Header from "@/widgets/header/Header";
import { useLocation, useOutlet } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";

const Layout = () => {

    const outlet = useOutlet()
    const location = useLocation()

    return (
        <div className="flex h-[100dvh] flex-col">
            <Header />
            {location.pathname.includes('advice/') ?
                <main className="flex-grow">
                    {outlet}
                </main>
                :
                <SwitchTransition>
                    <CSSTransition
                        key={location.pathname}
                        timeout={300}
                        classNames={'page'}
                        unmountOnExit
                    >
                        {() => (
                            <main className="flex-grow">
                                {outlet}
                            </main>
                        )}
                    </CSSTransition>
                </SwitchTransition>
            }
            <Footer />
        </div>
    )
}

export default Layout;