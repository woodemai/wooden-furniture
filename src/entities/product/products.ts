import { IMAGES } from "@/assets/images/images";
import { IProduct } from "./IProduct";

export const stairs: IProduct[] = [
  {
    id: 1,
    title: "Лестница по бетону",
    description:
      "Стоимость лестницы зависит от ширины проёма и типа балюстрады, вызов мастера на замер бесплатно",
    price: 180,
    img: IMAGES.stair1,
  },
  {
    id: 2,
    title: "Классика",
    description:
      "Мастер во время приезда проконсультирует по любым вопросам изготовления лестницы",
    price: 140,
    img: IMAGES.stair2,
  },
  {
    id: 3,
    title: "Полностью деревянная",
    description: "Подберём материал и конфигурацию.",
    price: 140,
    img: IMAGES.stair3,
  },
  {
    id: 4,
    title: "Лестница по бетону",
    description: "Дадим совет по покраске",
    price: 180,
    img: IMAGES.stair4,
  },
  {
    id: 5,
    title: "Лестница из бука",
    description:
      "Покрываем водными и полиуретановыми лаками на акриловой основе.",
    price: 150,
    img: IMAGES.stair5,
  },
  {
    id: 6,
    title: "Подшивка гипсокартоном",
    description: "Своё производство, цех с современным оборудованием.",
    price: -1,
    img: IMAGES.stair6,
  },
  {
    id: 7,
    title: "Подшивка деревом",
    description: "Лакокрасочная камера",
    price: -1,
    img: IMAGES.stair7,
  },
];

export const kitchens: IProduct[] = [
  {
    id: 1,
    title: "Дубовые фасады",
    description:
      "Мастер приедет бесплатно в удобное для Вас время, и сделает замеры кухни",
    price: 350,
    img: IMAGES.kitchen1,
  },
  {
    id: 2,
    title: "Фасады бук",
    description:
      "Мастер во время приезда проконсультирует по любым вопросам изготовления кухни",
    price: 340,
    img: IMAGES.kitchen2,
  },
  {
    id: 3,
    title: "Акрил матовый",
    description:
      "Подберём материал, конфигурацию и фурнитуру согласно Вашему представлению",
    price: 240,
    img: IMAGES.kitchen3,
  },
  {
    id: 4,
    title: "Массив дуба классика",
    description: "Создадим проект Кухни согласно Ваших возможностей",
    price: 180,
    img: IMAGES.kitchen4,
  },
  {
    id: 5,
    title: "Цвет по каталогам RAL",
    description:
      "Покрываем водными и полиуретановыми лаками на акриловой основе",
    price: 150,
    img: IMAGES.kitchen5,
  },
  {
    id: 6,
    title: "Пластик глянцевый",
    description: "Своё производство, цех с современным оборудованием.",
    price: -1,
    img: IMAGES.kitchen6,
  },
  {
    id: 7,
    title: "Шпон + Акрил глянец",
    description: "Лакокрасочная камера",
    price: -1,
    img: IMAGES.kitchen7,
  },
];

export interface MainLink extends IProduct {
  to: string;
}

export const mainLinks: MainLink[] = [
    {
        id: 1,
        to: "/catalog?id=stairs",
        title: "Лестницы под заказ",
        description: "Изготовим под Ваше помещение, подробности внутри",
        img: IMAGES.stair2,
        price: -1,
    },
    {
        id: 2,
        to: "/catalog?id=kitchens",
        title: "Кухни на любой вкус",
        description: "Изготовим под Ваше помещение, подробности внутри",
        img: IMAGES.kitchen2,
        price: -1,
    },
    {
        id: 3,
        to: "/catalog?id=screens",
        title: "Экраны на батареи",
        description: "Типы и цены внутри",
        img: IMAGES.screen7,
        price: -1,
    },
    {
        id: 4,
        to: "/catalog?id=furniture",
        title: "Отреставрируем, вернём первоначальный вид",
        description: "Фото внутри",
        img: IMAGES.furniture1,
        price: -1,
    },
    {
        id: 5,
        to: "/catalog?id=furniture",
        title: "Эксклюзивный подарок из Вашей фантазии",
        description: "Фото внутри",
        img: IMAGES.furniture2,
        price: -1,
    },
    {
        id: 6,
        to: "/catalog?id=furniture",
        title: "Изготовим любую мебель по Вашим чертежам.",
        description: "Цены внутри",
        img: IMAGES.furniture3,
        price: -1,
    },
];

export const screens: IProduct[] = [
  {
    id: 1,
    description: 'Экран на батарею из массива бука или дуба',
    img: IMAGES.screen1,
    price: 25,
  },
  {
    id: 2,
    description: 'Экраны серии «МАССИВ - КЛАССИЧЕСКИЙ»',
    img: IMAGES.screen2,
    price: 24,
  },
  {
    id: 3,
    description: 'Цвет и лаковое покрытие экрана не изменятся даже спустя годы',
    img: IMAGES.screen3,
    price: 18,
  },
  {
    id: 4,
    description: 'Покрываем водными и полиуретановыми лаками на акрилловой основе',
    img: IMAGES.screen4,
    price: 25,
  },
  {
    id: 5,
    description: 'Своё производство, цех с современным оборудованием',
    img: IMAGES.screen5,
    price: -1,
  },
  {
    id: 6,
    description: 'Лакокрасочная камера',
    img: IMAGES.screen6,
    price: -1,
  },
]
export const furniture: IProduct[] = [
  {
    id: 1,
    title: 'Отделка интерьера',
    description: 'Дизайнер приедет в удобное для Вас время, и предложит своё видение или расмотрит Ваше предложение',
    img: IMAGES.furniture4,
    price: -1
  },
  {
    id: 2,
    title: 'Отделка каминов',
    description: 'Мастер во время приезда проконсультирует по любым вопросам',
    img: IMAGES.furniture5,
    price: -1
  }, {
    id: 3,
    title: 'Арки и бары',
    description: 'Подберём материал, конфигурацию согласно Проекта',
    img: IMAGES.furniture6,
    price: -1
  }, {
    id: 4,
    title: 'Массив дуба',
    description: 'Придумаем мебель вместе',
    img: IMAGES.furniture7,
    price: -1
  }, {
    id: 5,
    title: 'Арки и дверные проемы',
    description: 'Декоративная отделка дверных проёмов',
    img: IMAGES.furniture8,
    price: -1
  }, {
    id: 6,
    title: 'Спальни',
    description: 'Изготовим мебель в спальню',
    img: IMAGES.furniture9,
    price: -1
  }, {
    id: 7,
    title: 'Потолки',
    description: 'Отделаем современными материалами',
    img: IMAGES.furniture10,
    price: -1
  },
]