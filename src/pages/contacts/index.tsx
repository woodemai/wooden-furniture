import { Card, CardContent, CardFooter, CardHeader } from "@/shared/components/ui/card";
import { FlagTriangleRight, Mail, Phone } from "lucide-react";

const Contacts = () => {

    return (
        <>
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
                </CardFooter>
            </Card>
            <Card>
                <CardHeader className="text-xl tracking-tight font-bold">
                    Контактная информация
                </CardHeader>
                <CardContent className="flex flex-col gap-y-4">
                    <div className="flex gap-2">
                        <FlagTriangleRight />
                        <h3 className="font-semibold tracking-tight">Адрес производства: </h3>
                        <a className="text-accent" href="https://yandex.ru/maps/-/CDRBBQo~" target="_blank">г. Воронеж. П. Садовый ул. Садовая 9</a>
                    </div>
                    <div className="flex gap-2">
                        <Mail />
                        <h3 className="font-semibold tracking-tight">Почта</h3>
                        <a className="text-accent" href="mailto:drevo.servis@yandex.ru" target="_blank">drevo.servis@yandex.ru</a>
                    </div>
                    <div className="flex gap-2">
                        <Phone />
                        <h3 className="font-semibold tracking-tight flex gap-2">Номер телефона</h3>
                        <a className="text-accent" href="tel:+79204199145">+7 (920)-419-91-95</a>
                    </div>

                </CardContent>
            </Card>
        </>
    )
}

export default Contacts;