import { Card, CardContent, CardHeader } from "@/shared/components/ui/card";

const Contacts = () => {

    return (
        <div className="w-full max-w-screen-lg mx-auto mt-8">
            <Card>
                <CardHeader className="text-xl tracking-tight font-bolder">
                    Контактная информация
                </CardHeader>
                <CardContent className="flex flex-col gap-y-2">
                    <h3 className="font-semibold tracking-tight">Адрес производства</h3>
                    <span>г. Воронеж. П. Садовый ул. Садовая 9.</span>
                    <h3 className="font-semibold tracking-tight">Почта</h3>
                    <a className="text-accent" href="mailto:drevo.servis@yandex.ru" target="_blank">drevo.servis@yandex.ru</a>
                    <h3 className="font-semibold tracking-tight">Номер телефона</h3>
                    <a className="text-accent" href="tel:+79204199145">+7 (920)-419-91-95</a>
                </CardContent>
            </Card>
        </div>
    )
}

export default Contacts;