import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { RootState } from '../../types/types';
import { productType } from '../../types/product';
import { getProducts } from '../../redux/Thunk/Products/getProducts';
import style from './sale.module.css';
import Card from '../Card/Card';
import MainBrandsBlock from '../MainBrandsBlock/MainBrandsBlock';
import FilterBar from '../FilterBar/FilterBar';
import { getCategoryState } from '../../redux/selectors/category.selector';
import Skeleton from '../Skeleton/Skeleton';

export function Sale(): JSX.Element {
  const dispatch = useAppDispatch();

  const categoryState = useAppSelector(getCategoryState);
  const products = useAppSelector(
    (state: RootState) => state.ProductReducer.products
  );
  const loading = useAppSelector(
    (state: RootState) => state.ProductReducer.loading
  );

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      <div className={style.catalog}>
        <div className={style.filterBar}>
          <FilterBar />
        </div>
        <div className={style.container}>
          <div className={style.productsContainer}>
            <h2>Sale</h2>
            {loading ? (
              <Skeleton />
            ) : (
              // <div className="loading">
              //   <img src="./Spinner-1s-200px.gif" alt="" />
              // </div>
              <div className={style.loadedCards}>
                {products.length && categoryState === 0 ? (
                  products.map(
                    (el: productType) =>
                      el.Vendor.premium && <Card key={el.id} el={el} />
                  )
                ) : products.length && categoryState ? (
                  products
                    .filter((el) => el.productTypeId === categoryState)
                    .map(
                      (el: productType) =>
                        el.Vendor.premium && <Card key={el.id} el={el} />
                    )
                ) : (
                  <p className="products">No products found</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={style.pagination}>1 2 3 4 5</div>

      <MainBrandsBlock />
    </>
  );
}
