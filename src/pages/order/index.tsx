import { Card, CardContent, CardFooter, CardHeader } from "@/shared/components/ui/card";
import PageTemplate from "@/widgets/page/PageTemplate";


const Order = () => {

    return (
        <PageTemplate className="flex flex-col gap-8">
            <Card>
                <CardHeader className="text-xl tracking-tight font-bold">
                    Заказ изделия
                </CardHeader>
                <CardContent>
                    Заказывая изделия в фирме «Древо-Сервис» покупатель может воспользоваться бесплатной услугой: доставкой мебели до подъезда в любой район города, в удобное для него время.
                    <ul className="flex flex-col gap-4 mt-2">
                        <li>
                            Консультация специалиста по любым вопросам мебельного производства не являющимися коммерческой тайной.
                        </li>
                        <li>
                            Чертежи, замеры, выезд специалиста на дом.
                        </li>
                    </ul>
                </CardContent>
                <CardFooter>
                    Хорошее настроение!
                    Всё бесплатно

                </CardFooter>
            </Card>
            <Card>
                <CardHeader className="text-xl tracking-tight font-bold">
                    Контактная информация
                </CardHeader>
                <CardContent className="flex flex-col gap-y-2">
                    <span>Для заказа, Вы можете отправить нам свои
                        пожелания на почту:</span>
                    <a className="text-accent" href="mailto:drevo.servis@yandex.ru" target="_blank">drevo.servis@yandex.ru</a>
                    <span>или позвонить по номеру телефона:</span>
                    <a className="text-accent" href="tel:+79204199145">+7 (920)-419-91-95</a>
                </CardContent>
            </Card>
        </PageTemplate>
    )
}

export default Order;