import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { RootState } from '../../types/types';
import { productType } from '../../types/product';
import { getProducts } from '../../redux/Thunk/Products/getProducts';
import style from './home.module.css';
import Card from '../Card/Card';
import MainBrandsBlock from '../MainBrandsBlock/MainBrandsBlock';
import FilterBar from '../FilterBar/FilterBar';
import Advantages from '../Advantages/Advantages';
import { getSexState } from '../../redux/selectors/sex.selector';
import {
  setAgeState,
  setCategoryState,
  setSexState,
} from '../../redux/slices/categories.slice';
import Skeleton from '../Skeleton/Skeleton';
import { Pagination } from 'antd';
import PaginationFunc from '../PaginationFunc/PaginationFunc';

export function Home(): JSX.Element {
  const dispatch = useAppDispatch();

  const sexState = useAppSelector(getSexState);

  const loading = useAppSelector(
    (state: RootState) => state.ProductReducer.loading
  );

  useEffect(() => {
    dispatch(getProducts());
    dispatch(setSexState(0));
    dispatch(setAgeState(0));
    dispatch(setCategoryState(0));
  }, []);

  const { currentProducts, handlePageChange } = PaginationFunc();

  console.log(currentProducts, '<<<<<currentProducts');

  return (
    <>
      <div className={style.catalog}>
        <div className={style.filterBar}>
          <FilterBar />
        </div>
        <div className={style.container}>
          <div className={style.productsContainer}>
            <div className={style.cardContainer}>
              {loading ? (
                <Skeleton />
              ) : (
                <div className={style.loadedCards}>
                  {currentProducts.length && sexState === 0 ? (
                    currentProducts
                      .filter((el) => el.rating > 4.5)
                      .map((el: productType) => <Card key={el.id} el={el} />)
                  ) : currentProducts.length && sexState ? (
                    currentProducts
                      .filter((el) => el.rating > 4.5 && el.sexId === sexState)
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
      <div className={style.pagination}>
        <Pagination
          defaultCurrent={1}
          total={100}
          pageSize={10}
          showSizeChanger={true}
          showQuickJumper={true}
          onChange={handlePageChange}
        />
      </div>
      <MainBrandsBlock />
      <Advantages />
    </>
  );
}
