import { Card, CardContent, CardHeader } from "@/shared/components/ui/card";
import PageTemplate from "@/widgets/page/PageTemplate";

const Materials = () => {

    return (
        <PageTemplate>
            <Card>
                <CardHeader className="font-bold tracking-tight text-xl">Подбор материала</CardHeader>
                <CardContent className="flex flex-col gap-4">
                    <p>
                        При соблюдении правил эксплуатации, правильном и бережном обращении, соблюдении всех рекомендаций производителя, мебель прослужит Вам долгие годы.
                    </p>
                    <p>
                        Изделие рекомендуется эксплуатировать в проветриваемом помещении, не подверженном резким перепадам температур, имеющих отопление и вентиляцию, с температурой воздуха не ниже +10<span className="ordinal">°</span>С и не выше +30<span className="ordinal">°</span> С с относительной влажностью воздуха 45-70% (ГОСТ 16371-93). Существенные отклонения от указанных режимов приводят к значительному ухудшению потребительских качеств мебели.
                    </p>
                    <p>
                        Не рекомендуется устанавливать нагревательные приборы (печки, плиты, духовки, световые элементы и др.) рядом с фасадами, т.к. контакт с поверхностями или воздухом, температура которых превышает +80<span className="ordinal">°</span> С может привести к деформации
                    </p>
                    <p>
                        Не допускайте кратковременного взаимодействия фасадов и торцов деталей из ЛДСП и столешницы, обработанных кромочным материалом, с температурами выше +85<span className="ordinal">°</span> С, а также избегайте длительного воздействия на них горячего (выше +50<span className="ordinal">°</span> С) воздуха (например: неплотно закрытый духовой шкаф, длительное приготовление блюд при обильном выделении горячего пара без использования вытяжки, открытая дверца, находящаяся под светильником,
                    </p>
                    <p>
                        Не допускайте прямого попадания воды на торцы деталей из ламинированной плиты.
                    </p>
                    <p>
                        При соблюдении указанных правил мебель прослужит долгие годы.
                    </p>
                    <p>
                        Гарантийные обязательства соблюдаются при условии выполнения перечисленных правил эксплуатации и
                    </p>
                    <p>
                        Детали изделия с выявленными дефектами (кроме случаев, указанных в п.п.) в период действия гарантии бесплатно реставрируются или при невозможности реставрации – заменяются новыми по усмотрению продавца.
                    </p>
                    <p>
                        Реставрация может осуществляться как на месте, так и в условиях мастерской. Решение о замене товара или безвозмездном устранении его недостатков принимается экспертом продавца, о чем оформляется соответствующий акт. Заменяемые детали переходят в собственность продавца.
                    </p>
                </CardContent>
            </Card>
        </PageTemplate>
    )
}

export default Materials;