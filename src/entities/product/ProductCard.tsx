import { Separator } from "@/shared/components/ui/separator";
import { IProduct } from "./IProduct";

const ProductCard = ({ title, price, description, img }: IProduct) => {

    return (
        <div className="product-card relative flex flex-col-reverse justify-between rounded-2xl shadow-xl bg-card  w-[300px] overflow-hidden h-[300px]">
            <img width={400} height={400} src={img} alt={title} />
            <div className="z-10 p-4 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                <h3 className="text-background text-xl tracking-tight font-bold">{title}</h3>
            </div>
            <div className="product-desc">
                <p className="font-semibold ">{description}</p>
                <Separator />
                {price === -1 ? <p className="text-center">Цена договорная</p>
                    : <p className="text-center">Цена от {price} тыс. ₽</p>}
            </div>
        </div>
    )
}

export default ProductCard;