import { Card, CardContent, CardHeader } from "@/shared/components/ui/card";

const Gluing = () => {

    return (
        <>
            <Card>
                <CardHeader className="font-bold tracking-tight text-xl">Секреты склейки</CardHeader>
                <CardContent className="flex flex-col gap-4">
                    <p>В последние годы все более весомый процент строительных и столярных изделий производится из клееной древесины. Это вызвано тем, что клееная древесина обладает несомненными преимуществами по сравнению с массивной. Выделим основные из них:</p>
                    <h3 className="text-xl tracking-tight font-semibold">Высокое качество поверхности</h3>
                    <p>Перед склейкой древесины из нее вырезаются сучки и дефекты, заготовки подбираются по цвету, текстуре. Поэтому изделия из клееной древесины имеют безупречный внешний вид. Это актуально для таких изделий, как мебельный щит, половая доска, вагонка и т.п.</p>
                    <h3 className="text-xl tracking-tight font-semibold">Стабильность геометрических размеров</h3>
                    <p>В отличие от массивной клееная древесина сохраняет свою форму и размеры с течением времени. Она не дает усадки, не скручивается и не изгибается. Это обусловлено отсутствием в клееной древесине внутренних напряжений. Актуально для строительного, оконного бруса и т.д.</p>
                    <h3 className="text-xl tracking-tight font-semibold">Прочность</h3>
                    <p>Конструкции из клееной древесины имеют на 50-70 большую прочность по сравнению с массивной.</p>

                </CardContent>
            </Card>
            <Card>
                <CardHeader className="font-bold tracking-tight text-xl">Технологический процесс склеивания состоит из следующих операций</CardHeader>
                <CardContent className="flex flex-col gap-4">
                    <ul className="list-disc list-inside">
                        <li>Подготовка склеиваемых материалов</li>
                        <li>Нанесение клея</li>
                        <li>Выдержка до прессования</li>
                        <li>Прессование и выдержка под давлением</li>
                        <li>Выдержка после склеивания</li>
                    </ul>
                    <p>При склеивании необходимо знать правила подбора делянок «досок» по годичным слоям. Неправильно подобранные по годичным слоям доски могут неравномерно разбухать, подвергаться усушке и коробиться</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="font-bold tracking-tight text-xl">Для прочного склеивания нужно следующее</CardHeader>
                <CardContent className="flex flex-col gap-4">
                    <ul className="list-disc list-inside">
                        <li>Выпилить сердцевину досок</li>
                        <li>Два бруска или доски располагать так, чтобы их заболонная часть оказалась внутри</li>
                        <li>Годичные слои у рядом лежащих досок должны быть направлены в разные стороны или находиться под углом одни к другим, а соединяемые кромки по возможности быть с одной части ствола «одноименными», т.е. обе заболонными или ядровыми</li>
                        <li>Щиты изготавливать из делянок шириной не более 100 мм</li>
                        <li>Влажность древесины для мебели должна быть 8-10%</li>
                        <li>Перед склеиванием щитов кромки делянок необходимо хорошо отфуговать и не допускать на них пыли, грязи и жирных пятен</li>
                        <li>После выравнивания, склеиваемые по ширине заготовки, подбирают и укладывают на сжимные бруски таким образом, чтобы кромки плотно прилегали одна к другой. Подобранные заготовки помечают, нанося карандашом две сходящиеся линии «галочку»</li>
                    </ul>
                </CardContent>
            </Card>
        </>
    )
}

export default Gluing;