import { IProduct } from "@/entities/product/IProduct";
import ProductCard from "@/entities/product/ProductCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/shared/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react";

interface Props {
    title: string,
    items: IProduct[],
    id?: string
}

const ProductCarousel = ({ id, title, items }: Props) => {

    const plugin = useRef(
        Autoplay({ delay: 4000, stopOnInteraction: true })
    )

    return (
        <div id={id} className="flex flex-col gap-y-8">
            <h3>{title}</h3>
            <Carousel
                plugins={[plugin.current]}
                opts={{
                    align: 'center',
                    loop: true,
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