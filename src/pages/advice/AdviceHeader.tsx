import HeaderLink from "@/features/HeaderLink";

const AdviceHeader = () => {

    return (
        <header className="bg-card rounded-b-3xl mx-auto w-fit shadow-lg flex gap-2 justify-center items-center">
            <HeaderLink to='/advice/materials'>
                Подбор материала
            </HeaderLink>
            <HeaderLink to='/advice/gluing'>
                Секреты склейки
            </HeaderLink>
            <HeaderLink to='/advice/staining'>
                Морение
            </HeaderLink>
            <HeaderLink to='/advice/varnish'>
                Покрытие лаками
            </HeaderLink>
            <HeaderLink to='/advice/storage'>
                Хранение деревянных изделий
            </HeaderLink>
            <HeaderLink to='/advice/care'>
                Уход за деревянной мебелью
            </HeaderLink>
        </header>
    )
}

export default AdviceHeader;