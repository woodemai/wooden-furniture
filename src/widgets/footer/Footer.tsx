import FooterLink from "@/features/FooterLink";

const Footer = () => {

    return (
        <div className="w-full bg-card py-4 px -4 sm:px-40 flex flex-col justify-center items-center gap-4">
            <nav className="flex flex-col">
                <FooterLink to='/'>Главная</FooterLink>
                <FooterLink to='/contacts'>Контакты</FooterLink>
                <FooterLink to='/order'>Заказать</FooterLink>
            </nav>
            <span className="text-foreground/70 font-bold">©2012 Company Drevo-site</span>
        </div>
    )
}

export default Footer;