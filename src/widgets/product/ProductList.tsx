import { IProduct } from "@/entities/product/IProduct";
import ProductCard from "@/entities/product/ProductCard";

interface Props {
    items: IProduct[]
}

const ProductList = ({ items }: Props) => {

    return (
        <ul className="flex flex-col gap-4 sm:grid sm:grid-cols-3 sm:gap-8 items-center">
            {items.map(item => <li key={item.id}><ProductCard {...item} /></li>)}
        </ul>
    )
}

export default ProductList;