import ContactItem from "@/features/ContactItem";
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
                    <ContactItem
                        label={<>
                            <FlagTriangleRight />
                            <h6>Адрес производства: </h6>
                        </>}
                        href="https://yandex.ru/maps/-/CDRBBQo~"
                    >
                        г. Воронеж. П. Садовый ул. Садовая 9
                    </ContactItem>
                    <ContactItem
                        label={<>
                            <Mail />
                            <h6>Почта</h6>
                        </>}
                        href="mailto:drevo.servis@yandex.ru"
                    >
                        drevo.servis@yandex.ru
                    </ContactItem>
                    <ContactItem href="tel:+79204199145" label={<>
                        <Phone />
                        <h6>Номер телефона</h6>
                    </>}
                    >
                        +7 (920)-419-91-95
                    </ContactItem>
                </CardContent>
            </Card>
        </>
    )
}

export default Contacts;