import { Card, CardContent, CardFooter, CardHeader } from "@/shared/components/ui/card";
import { FlagTriangleRight, Mail, Phone } from "lucide-react";

const Contacts = () => {

    return (
        <>
            <Card>
                <CardHeader>
                    <h4>Заказ изделия</h4>
                </CardHeader>
                <CardContent>
                    <p>
                        Заказывая изделия в фирме <strong>Древо-Сервис</strong> покупатель может воспользоваться бесплатной услугой: доставкой мебели до подъезда в любой район города, в удобное для него время.
                    </p>
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
                <CardHeader>
                    <h4>Контактная информация</h4>
                </CardHeader>
                <CardContent className="flex flex-col gap-y-4">
                    <div className="flex gap-2">
                        <FlagTriangleRight />
                        <h6>Адрес производства: </h6>
                        <a className="text-accent text-lg" href="https://yandex.ru/maps/-/CDRBBQo~" target="_blank">г. Воронеж. П. Садовый ул. Садовая 9</a>
                    </div>
                    <div className="flex gap-2">
                        <Mail />
                        <h6>Почта</h6>
                        <a className="text-accent text-lg" href="mailto:drevo.servis@yandex.ru" target="_blank">drevo.servis@yandex.ru</a>
                    </div>
                    <div className="flex gap-2">
                        <Phone />
                        <h6>Номер телефона</h6>
                        <a className="text-accent text-lg" href="tel:+79204199145">+7 (920)-419-91-95</a>
                    </div>

                </CardContent>
            </Card>
        </>
    )
}

export default Contacts;