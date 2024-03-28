import ProductCard from "@/entities/product/ProductCard";
import { MainLink } from "@/entities/product/products";
import { Link } from "react-router-dom";

interface Props {
    items: MainLink[]
}

const LinkList = ({ items }: Props) => {

    return (
        <ul className="flex flex-col gap-4 lg:grid grid-cols-3 sm:gap-8 items-center">
            {items.map(item => <li key={item.id}><Link className="cursor-pointer" to={item.to}><ProductCard {...item} />   </Link></li>)}
        </ul>
    )
}

export default LinkList;