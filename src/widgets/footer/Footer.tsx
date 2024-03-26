import FooterLink from "@/features/FooterLink";

const Footer = () => {

    return (
        <div className="bg-card py-4 w-full max-w-5xl mx-auto rounded-t-3xl shadow-2xl flex flex-col justify-center items-center gap-4">
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