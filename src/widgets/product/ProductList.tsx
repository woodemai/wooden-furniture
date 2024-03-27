import { IProduct } from "@/entities/product/IProduct";
import ProductCard from "@/entities/product/ProductCard";

interface Props {
    title: string,
    items: IProduct[]
}

const ProductList = ({ items, title }: Props) => {

    if (!items.length) {
        return (
            <div className="flex flex-col gap-4 justify-center items-center w-full mt-8">
                <h3 className="text-xl text-accent text-center font-bold tracking-tight">Ни одного элемента из категории "{title}"" не найдено :(</h3>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-4">
            <h2 className="font-semibold text-2xl tracking-tight">{title}</h2>
            <ul className="flex flex-col gap-4 sm:grid sm:grid-cols-3 sm:gap-8 items-center">
                {items.map(item => <li key={item.id}><ProductCard {...item} /></li>)}
            </ul>
            </div>
    )
}

export default ProductList;