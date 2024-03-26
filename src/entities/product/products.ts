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
