import { Separator } from "@/shared/components/ui/separator";
import { IProduct } from "./IProduct";

const ProductCard = ({ title, price, description, img }: IProduct) => {

    return (
        <div className="product-card relative flex flex-col-reverse justify-between rounded-2xl shadow-xl bg-card  w-[300px] overflow-hidden h-[300px]">
            <img width={300} height={300} src={img} alt={title ?? 'product'} />
            {title && <div className="z-10 p-2 bg-foreground/20 backdrop-blur-sm">
                <h5 className="text-background">{title}</h5>
            </div>
            }
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