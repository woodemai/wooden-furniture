import { Separator } from "@/shared/components/ui/separator";
import { IProduct } from "./IProduct";

const ProductCard = ({ title, price, description, img }: IProduct) => {

    return (
        <div className="relative flex flex-col-reverse rounded-2xl shadow-xl bg-card  w-[300px] overflow-hidden h-[300px]">
            <img className="absolute rounded-2xl hover:scale-110 hover:blur-sm  hover:translate-y-5 transition-all duration-500 w-[400px] h-[400px] object-cover" width={400} height={400} src={img} alt={title} />
            <div className="z-10 p-2">
                <h3 className="text-background text-xl tracking-tight font-bold">{title}</h3>
            </div>
            <div className="flex gap-4 p-2 hover:bg-foreground/50 shadow-2xl backdrop-blur-sm text-background flex-col z-10 opacity-0 hover:opacity-100 -translate-y-10 hover:translate-y-0 transition-all ease-in-out duration-500 w-full h-full relative top-0 left-0">
                <p className="font-semibold ">{description}</p>
                <Separator />
                {price === -1 ? <p className="text-center">Цена договорная</p>
                    : <p className="text-center">Цена от {price} тыс. ₽</p>}
            </div>
        </div>
    )
}

export default ProductCard;