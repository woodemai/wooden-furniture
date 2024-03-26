import HeaderLink from "@/features/HeaderLink";
import logo from '/logo.svg'
import { memo } from "react";

const Header = memo(() => {

    return (
        <header className="relative w-full min-h-16 bg-card flex justify-center items-center">
            <div className="absolute gap-4 top-0 left-0 h-full pl-4 flex justify-center items-center text-center">
                <img width={40} height={40} src={logo} alt="logo" />
                <h1 className=" font-bold tracking-tight text-xl">Древо-Сервис</h1>
            </div>
            <nav>
                <HeaderLink to='/'>
                    Главная
                </HeaderLink>
                <HeaderLink to='/kitchens'>
                    Кухни
                </HeaderLink>
                <HeaderLink to='/stairs'>
                    Лестницы
                </HeaderLink>
                <HeaderLink to='/cnc'>
                    ЧПУ
                </HeaderLink>
                <HeaderLink to='/screens'>
                    Экраны
                </HeaderLink>
                <HeaderLink to='/furniture'>
                    Мебель
                </HeaderLink>
                <HeaderLink to='/advice'>
                    Советы
                </HeaderLink>
                <HeaderLink to='/order'>
                    Заказать
                </HeaderLink>
                <HeaderLink to='/contacts'>
                    Контакты
                </HeaderLink>

            </nav>
        </header>
    )
})

export default Header;