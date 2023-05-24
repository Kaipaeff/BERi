import React, { useState } from 'react';
// import { El } from '../../types/types';
import { useLocation, useNavigate } from 'react-router-dom';
import style from './ProductPage.module.css';
import { productType } from '../../types/product';
import { useAppDispatch } from '../../redux/hooks/hooks';
import { addGoodsReducer } from '../../redux/slices/shopCard/card.slice';
import arrowRight from '../../img/icons/arrowRight.svg';
import arrawLeft from '../../img/icons/arrow-left.svg';
import Rating from '../Rating/Rating/Rating';
import SetRating from '../Rating/SetRating/SetRating';

export default function ProductPage(): JSX.Element {
  const location = useLocation();
  const el = location.state.el;
  console.log(el, '<<<el');
  const dispatch = useAppDispatch();

  const handleAddToCart = (product: productType) => {
    //позже кнопку "в корзину" изменить на "перейти в корзину"?

    const getItemLocalStorage = localStorage.getItem('GoodsForShopCart')
      ? JSON.parse(localStorage.getItem('GoodsForShopCart') as string)
      : [];

    const findItem = getItemLocalStorage.find(
      (el: productType) => el.id === product.id
    );

    if (findItem) {
      const quantityProductFilter = getItemLocalStorage.map((el: any) =>
        el.id === product.id ? { ...el, quantity: el.quantity + 1 || 1 } : el
      );

      localStorage.setItem(
        'GoodsForShopCart',
        JSON.stringify(quantityProductFilter)
      );

      dispatch(addGoodsReducer(quantityProductFilter));
    } else {
      localStorage.setItem(
        'GoodsForShopCart',
        JSON.stringify([
          ...getItemLocalStorage,
          { ...product, quantity: 1, price: el.minPrice },
        ])
      );
      const firtsAddProductInLocalStorage = JSON.parse(
        localStorage.getItem('GoodsForShopCart') as string
      );
      dispatch(addGoodsReducer(firtsAddProductInLocalStorage));
    }
  };

  const navigate = useNavigate();

  const [activeRating, setActiveRating] = useState<boolean>(false);

  function handleActiveRating() {
    setActiveRating(true);
  }

  function handleInactiveRating() {
    setActiveRating(false);
  }

  return (
    <div className={style.wrapper}>
      <p className={style.backArrow} onClick={() => navigate(-1)}>
        <img src={arrawLeft} alt="arrawLeft" />
        назад
      </p>

      <div className={style.cardContainer}>
        <img className={style.productImg} src={el.Images[0].src} alt="cloth" />
        <div className={style.descriptionContainer}>
          <div className={style.description}>
            <p className={style.name}>
              <b>Название: </b> {el.name}
            </p>
            <p>
              <b>Описание:</b> <br />
              {el.description}
            </p>
            {activeRating ? (
              <div
                className={style.setRatingDiv}
                onMouseLeave={handleInactiveRating}
              >
                <SetRating />
              </div>
            ) : (
              <div
                className={style.ratingDiv}
                onMouseEnter={handleActiveRating}
              >
                <Rating el={el} />
              </div>
            )}
          </div>
          <div className={style.btnContainer}>
            {/* <div className={style.priceContainer}> */}
            <p className={style.price}>
              <b>{el.minPrice} ₽</b>
            </p>
            <button
              className={style.addToCardBtn}
              onClick={() => handleAddToCart(el)}
            >
              Добавить в корзину
              <img src={arrowRight} alt="arrowRight" />
            </button>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
