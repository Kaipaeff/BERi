import React, { useEffect, useState } from 'react';
import style from './favorites.module.css'
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { RootState } from '../../types/types';
import { productType } from '../../types/product';
import Card from '../Card/Card';
import { getProducts } from '../../redux/Thunk/Products/getProducts';
import { useNavigate } from 'react-router-dom';

import arrawLeft from '../../img/icons/arrow-left.svg'
import MainBrandsBlock from '../MainBrandsBlock/MainBrandsBlock';
import Advantages from '../Advantages/Advantages';
import FilterBar from '../FilterBar/FilterBar';
import { getCategoryState } from '../../redux/selectors/category.selector';


export function Favorites() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const dispatch = useAppDispatch();

  const categoryState = useAppSelector(getCategoryState);

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
      <div className={style.catalog}>
        {/* <div className={style.filterBar}>
          <FilterBar />
        </div> */}
        <p className={style.backArrow} onClick={() => navigate(-1)}><img src={arrawLeft} alt="arrawLeft" />назад</p>
        <div className={style.container}>

          <div className={style.productsContainer}>
            <div className={style.cardContainer}>
              {loading ? (
                <div className="loading">
                  <img src="./Spinner-1s-200px.gif" alt="" />
                </div>
              ) : (
                  <div className={style.loadedCards}>
                    {products.length && categoryState === 0 ? (
                      products.map((el: productType) => <Card key={el.id} el={el} />)
                    ) : products.length && categoryState ? (
                      products
                        .filter((el) => el.categoryId === categoryState)
                        .map((el: productType) => <Card key={el.id} el={el} />)
                    ) : (
                      <p className="products">No products found</p>
                    )}
                  </div>
              )}
            </div>
          </div>
        </div>

      </div>
      <div className={style.pagination}>1 2 3 4 5</div>
      <MainBrandsBlock />
      <Advantages />
      </> 



  )
}



