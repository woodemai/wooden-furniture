import HeaderLink from "@/features/HeaderLink";
import { memo } from "react";

const Header = memo(() => {

    return (
        <header className="w-full min-h-16 bg-card flex justify-center items-center">
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