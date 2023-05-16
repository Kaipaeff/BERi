import React from 'react';
import style from './mainSlider.module.css';
import MainSliderData from './MainSliderData';

export function MainSlider() {
  const [image, setImage] = React.useState(MainSliderData);
  const [currentIndex, setCurrentIndex] = React.useState(0) 
  

  return (
    <>
      <h1>MainSlider</h1>
      <section className={style.section}>

    </section>
    </>
  );
}
