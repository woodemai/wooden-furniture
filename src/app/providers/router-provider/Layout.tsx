import AdviceHeader from "@/pages/advice/AdviceHeader";
import Footer from "@/widgets/footer/Footer";
import Header from "@/widgets/header/Header";
import PageTemplate from "@/widgets/page/PageTemplate";
import { Suspense } from "react";
import { useLocation, useOutlet } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import LoadingLayout from "./LoadingLayout";

const Layout = () => {

    const outlet = useOutlet()
    const location = useLocation()

    return (
        <div className="flex h-[100dvh] flex-col">
            <Header />
            <Suspense fallback={<LoadingLayout />}>
                <PageTemplate>
                    {location.pathname.includes('advice') && <AdviceHeader />}
                    <SwitchTransition>
                        <CSSTransition
                            key={location.pathname}
                            timeout={300}
                            classNames={'page'}
                            unmountOnExit
                        >
                            {() => (
                                <div className="flex flex-col gap-8">
                                    {outlet}
                                </div>
                            )}
                        </CSSTransition>
                    </SwitchTransition>
                </PageTemplate>
            </Suspense>
            <Footer />
        </div>
    )
}

export default Layout;