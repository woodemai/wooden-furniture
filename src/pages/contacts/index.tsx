import { Card, CardContent, CardHeader } from "@/shared/components/ui/card";
import PageTemplate from "@/widgets/page/PageTemplate";
import { FlagTriangleRight, Mail, Phone } from "lucide-react";

const Contacts = () => {

    return (
        <PageTemplate>
            <Card>
                <CardHeader className="text-xl tracking-tight font-bold">
                    Контактная информация
                </CardHeader>
                <CardContent className="flex flex-col gap-y-4">
                    <div className="flex gap-2">
                        <FlagTriangleRight />
                        <h3 className="font-semibold tracking-tight">Адрес производства: </h3>
                        <span>г. Воронеж. П. Садовый ул. Садовая 9.</span>
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
        </PageTemplate>
    )
}

export default Contacts;