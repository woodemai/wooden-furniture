import HeaderLink from "@/features/HeaderLink";
import logo from '/logo.svg'
import { memo } from "react";
import { Bed, Home, Info, MessageCircle } from "lucide-react";

const Header = memo(() => {

    return (
        <header className="relative z-10 w-full bg-card flex justify-between sm:justify-center items-center sm:flex-col p-2 flex-row gap-2">
            <div className="xl:absolute sm:static left-0 top-0 h-full sm:pl-4 flex flex-col sm:flex-row sm:gap-4  gap-8 justify-center items-center gap-x-4 text-center">
                <img width={50} height={50} src={logo} alt="logo" />
                <h2 className="uppercase">Древо Сервис</h2>
            </div>
            <nav className="flex sm:flex-row items-end flex-col sm:items-center gap-x-2">
                <HeaderLink to='/'>
                    <Home/>
                    Главная
                </HeaderLink>
                <HeaderLink to='/catalog'>
                    <Bed/>
                    Каталог
                </HeaderLink>
                <HeaderLink to='/advice'>
                    <Info/>
                    Советы
                </HeaderLink>
                <HeaderLink to='/contacts'>
                    <MessageCircle/>
                    Контакты
                </HeaderLink>

            </nav>
        </header>
    )
})

export default Header;