import HeaderLink from "@/features/HeaderLink";
import logo from '/logo.svg'
import { memo } from "react";

const Header = memo(() => {

    return (
        <header className="relative z-10 w-full bg-card flex justify-center items-center p-6">
            <div className="absolute left-0 top-0 h-full pl-4 flex justify-center items-center gap-x-4 text-center">
                <img width={50} height={50} src={logo} alt="logo" />
                <h2 className="uppercase">Древо Сервис</h2>
            </div>
            <nav>
                <HeaderLink to='/'>
                    Главная
                </HeaderLink>
                <HeaderLink to='/catalog'>
                    Каталог
                </HeaderLink>
                <HeaderLink to='/advice'>
                    Советы
                </HeaderLink>
                <HeaderLink to='/contacts'>
                    Контакты
                </HeaderLink>

            </nav>
        </header>
    )
})

export default Header;