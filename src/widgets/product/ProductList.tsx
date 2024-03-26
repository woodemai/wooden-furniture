import { IProduct } from "@/entities/product/IProduct";
import ProductCard from "@/entities/product/ProductCard";
import { Link } from "react-router-dom";

interface Props {
    items: IProduct[]
}

const ProductList = ({ items }: Props) => {

    return (
        <ul className="grid grid-cols-3 gap-8">
            {items.map(item => <li key={item.id}><ProductCard {...item} /></li>)}
        </ul>
    )
}

export default ProductList;