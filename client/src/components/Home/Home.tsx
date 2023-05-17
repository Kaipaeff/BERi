import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { RootState } from '../../types/types';
import { productType } from '../../types/product';
import { getProducts } from '../../redux/Thunk/getProducts';
import style from './home.module.css';
import Card from '../Card/Card';
import FilterBar from '../FilterBar/FilterBar';

export function Home(): JSX.Element {
  const dispatch = useAppDispatch();
  const products = useAppSelector(
    (state: RootState) => state.ProductReducer.products
  );
  const loading = useAppSelector(
    (state: RootState) => state.ProductReducer.loading
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className={style.catalog}>
      <div className={style.filterBar}>
        <FilterBar />
      </div>
      <div className={style.productsContainer}>
        {loading ? (
          <div className="loading">
            <img src="./Spinner-1s-200px.gif" alt="" />
          </div>
        ) : (
          <div className={style.loadedCards}>
            {products.length ? (
              products.map((el: productType) => <Card key={el.id} el={el} />)
            ) : (
              <p className="products">No products found</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
