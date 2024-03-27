import { IProduct } from "@/entities/product/IProduct";
import ProductCard from "@/entities/product/ProductCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/shared/components/ui/carousel";

interface Props {
    title: string,
    items: IProduct[],
    id?: string
}

const ProductCarousel = ({ id, title, items }: Props) => {

    return (
        <div id={id} className="flex flex-col gap-y-8">
            <h2 className="font-semibold tracking-tight text-2xl">{title}</h2>
            <Carousel 
            opts={{
                align: 'center',
                loop: true
            }}
                className="w-full -ml-4">
                <CarouselContent>
                    {items.map(item => <CarouselItem className="basis-80" key={item.id}><ProductCard {...item} /></CarouselItem>)}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default ProductCarousel;