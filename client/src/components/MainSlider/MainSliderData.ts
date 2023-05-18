import sliderImage1 from '../../img/images/slider/sliderImage1.jpg';
import sliderImage2 from '../../img/images/slider/sliderImage2.jpg';
import sliderImage3 from '../../img/images/slider/sliderImage3.jpg';


export interface IImages {
  id: number;
  image: string;
  title: string;
  description: string;
}

const images: IImages[] = [
  {
    id: 1,
    image: sliderImage1 ,
    title: 'Стиль и комфорт Вашего ребенка',
    description: 'внутри нашего каталога',
  },

  // {
  //   id: 1,
  //   image: sliderImage2 ,
  //   title: 'Натуральные ткани и комфортные модели',
  //   description: 'Здесь также необходимо придумать некоторое описание',
  // },

  // {
  //   id: 1,
  //   image: sliderImage3 ,
  //   title: 'Стиль, достойный любого мероприятия',
  //   description: 'И здесь нужно придумать некоторое описание',
  // },
];

export default images;
