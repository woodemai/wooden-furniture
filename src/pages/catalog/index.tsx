import { furniture, kitchens, screens, stairs } from "@/entities/product/products";
import { Separator } from "@/shared/components/ui/separator";
import ProductCarousel from "@/widgets/product/ProductCarousel";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { animateScroll as scroll } from 'react-scroll';


const Catalog = () => {

    const location = useLocation();
    const id = new URLSearchParams(location.search).get('id');

    useEffect(() => {
        if (id) {
            const element = document.getElementById(id)
            if (element) {
                scroll.scrollTo(element.offsetTop, {
                    duration: 700,
                    delay: 200,
                    smooth: 'true'
                });
            }
        }
    }, [id]);

    return (
        <>
            <ProductCarousel id="kitchens" items={kitchens} title="Кухни" />
            <Separator className="bg-foreground/20"/>
            <ProductCarousel id="stairs" items={stairs} title="Лестницы" />
            <Separator className="bg-foreground/20" />
            <ProductCarousel id="screens" items={screens} title="Экраны" />
            <Separator className="bg-foreground/20" />
            <ProductCarousel id="furniture" items={furniture} title="Мебель" />
        </>
    )
}

export default Catalog;