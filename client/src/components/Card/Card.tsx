import React, { useState } from 'react';
import { El } from '../../types/types';
import style from '../Card/Card.module.css';
import Rating from '../Rating/Rating';
import { productType } from '../../types/product';

export default function Card({ el }: El): JSX.Element {
  const handleAddToCart = (product: productType) => {
    console.log(product, '<<<<<PRODUCT');

    //позже кнопку "в корзину" изменить на инкремент дикремент

    const getItemLocalStorage = localStorage.getItem('GoodsForShopCart')
      ? JSON.parse(localStorage.getItem('GoodsForShopCart') as string)
      : [];

    const findItem = getItemLocalStorage.find(
      (el: productType) => el.id === product.id
    );

    if (findItem) {
      const testMap = getItemLocalStorage.map((el: any) =>
        el.id === product.id ? { ...el, quantity: el.quantity + 1 || 1 } : el
      );
      localStorage.setItem('GoodsForShopCart', JSON.stringify(testMap));
    } else {
      localStorage.setItem(
        'GoodsForShopCart',
        JSON.stringify([
          ...getItemLocalStorage,
          { ...product, quantity: 1, price: el.minPrice },
        ])
      );
    }
  };

  return (
    <div className={style.card}>
      <img className={style.img} src={el.img} alt="cloth" />
      {/* <Rating el={el} /> */}
<<<<<<< HEAD
      <p className={style.name}>{el.name}</p>
      <p className={style.price}>от {el.minPrice} ₽</p>
=======
      <p>{el.name}</p>
      <p>От {el.minPrice} ₽</p>

      {/* <button
        className={style.sliderDescriptionBtn}
        onClick={() => handleAddToCart(el)}
      >
        Добавить в корзину
        <img src={arrowRight} alt="arrowRight" />
      </button> */}
>>>>>>> dev
    </div>
  );
}
