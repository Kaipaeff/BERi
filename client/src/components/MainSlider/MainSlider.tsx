import React from 'react';
import { Settings } from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import sliderImage1 from '../../img/images/slider/sliderImage1.jpg'
import sliderImage2 from '../../img/images/slider/sliderImage2.jpg'
import sliderImage3 from '../../img/images/slider/sliderImage3.jpg'

import arrowRight from '../../img/icons/arrowRight.svg'

import Slider from "react-slick";
// import React from "react";

import style from './mainSlider.module.css'

import images from './MainSliderData'

let settings: Settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
};


export default function MainSlider() {

  // const [sliderText, setSliderText ] = React.useState(images)  


  return (
    <div className={style.sliderDiv}>
      <div className={style.slider}>
        <Slider {...settings}>

          <div>
            <img src={sliderImage1} alt="sliderImage1" />
          </div>

          <div>
            <img src={sliderImage2} alt="sliderImage2" />
          </div>

          <div>
            <img src={sliderImage3} alt="sliderImage3" />
          </div>

        </Slider>
      </div>

      {images.map((el) => {
        return (
          <div className={style.sliderDescriptionDiv} key={el.id}>

            <h3 className={style.sliderTitle}>{el.title}</h3>
            <p className={style.sliderDescription}>{el.description}</p>

            <button 
              onClick={() => window.scrollTo(0, 450)}
              className={style.sliderDescriptionBtn}>
              Смотреть
              <img src={arrowRight} alt="arrowRight" />
            </button>
          </div>
        )
      })}
      
    </div>
  );
}
