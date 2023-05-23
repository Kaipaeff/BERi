import React from 'react';
import { El } from '../../types/types';
import style from '../Card/Card.module.css';
// import Rating from '../Rating/Rating';
import { Link } from 'react-router-dom';

// import favorites from '../../img/icons/favorites.svg'
// import favorite from '../../img/icons/favorite.svg'

export default function Card({ el }: El): JSX.Element {
  return (
    <div className={style.card}>
      
        {/* <img className={style.favoriteFalse} src={favorites} alt="favorite" /> */}
        {/* <img className={style.favoriteTrue} src={favorite} alt="favorite" /> */}
      

      <img className={style.img} src={el.Images[0].src} alt="cloth" />
      
      {/* <Rating el={el} /> */}
      <p className={style.name}>{el.name}</p>
      <p className={style.price}>от {el.minPrice} ₽</p>

      {/* <button
        className={style.sliderDescriptionBtn}
        onClick={() => handleAddToCart(el)}
      >
        Добавить в корзину
        <img alt="arrowRight" />
      </button> */}
    </div>
    <Link to="/product-page" state={{ el }}>
      <div className={style.card}>
        <img className={style.img} src={el.Images[0].src} alt="cloth" />
        {/* <Rating el={el} /> */}
        <p className={style.name}>{el.name}</p>
        <p className={style.price}>от {el.minPrice} ₽</p>
      </div>
    </Link>
  );
}
