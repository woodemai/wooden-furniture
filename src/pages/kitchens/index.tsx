import { Link } from "react-router-dom";

const Kitchens = () => {

    return (
        <div className="flex w-full h-full flex-col gap-8 justify-center items-center">
            <h1 className="text-3xl font-bold tracking-tight">Страница пока находится в разработке :(</h1>
            <Link className="text-accent underline-offset-8 hover:underline" to='/'>На главную</Link>
        </div>
    )
}

export default Kitchens;