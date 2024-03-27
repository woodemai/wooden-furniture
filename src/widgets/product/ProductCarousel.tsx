import { IProduct } from "@/entities/product/IProduct";
import ProductCard from "@/entities/product/ProductCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/shared/components/ui/carousel";
import { Separator } from "@/shared/components/ui/separator";
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
        <div id={id} className="flex flex-col gap-y-2 bg-card/70 py-4 rounded-3xl shadow-xl">
            <div className="flex flex-col gap-4 p-4 ">
                <h4>{title}</h4>
                <Separator className="bg-foreground/20" />
            </div>
            <Carousel
                plugins={[plugin.current]}
                opts={{
                    align: 'center',
                    loop: true,
                }}
                className="w-full">
                <CarouselContent>
                    {items.map(item => <CarouselItem className="basis-[20rem]" key={item.id}><ProductCard {...item} /></CarouselItem>)}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default ProductCarousel;