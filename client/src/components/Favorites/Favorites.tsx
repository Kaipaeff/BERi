import React, { useEffect } from 'react';
import style from './favorites.module.css'
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { RootState } from '../../types/types';
import { productType } from '../../types/product';
import Card from '../Card/Card';
import { getProducts } from '../../redux/Thunk/getProducts';
import { useNavigate } from 'react-router-dom';

import arrawLeft from '../../img/icons/arrow-left.svg'



export function Favorites() {

  const dispatch = useAppDispatch();

  const loading = useAppSelector(
    (state: RootState) => state.ProductReducer.loading
  );

  const products = useAppSelector(
    (state: RootState) => state.ProductReducer.products
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const navigate = useNavigate();

  return (
    <>
      <div className={style.wrapper}>

        <div className={style.container}>

          
          {loading ? (
            <div className="loading">
              <img src="./Spinner-1s-200px.gif" alt="" />
            </div>
            ) : (
              <div className={style.loadedCardsWrapper}>
                <p className={style.backArrow} onClick={() => navigate(-1)}><img src={arrawLeft} alt="arrawLeft" />назад</p>
                <div className={style.loadedCards}>
                  {products.length ? (
                    products.map((el: productType) => <Card key={el.id} el={el} />)
                    ) : (
                    <p className="products">No products found</p>
                  )}  
                </div>
            </div>
          )}

        </div>

      </div>

    </>



  )
}
