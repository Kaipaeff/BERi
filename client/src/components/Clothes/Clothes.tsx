import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { RootState } from '../../types/types';
import { productType } from '../../types/product';
import { getProducts } from '../../redux/Thunk/Products/getProducts';
import style from './clothes.module.css';
import Card from '../Card/Card';
import MainBrandsBlock from '../MainBrandsBlock/MainBrandsBlock';
import FilterBar from '../FilterBar/FilterBar';
import { getCategoryState } from '../../redux/selectors/category.selector';
import { getAgeState } from '../../redux/selectors/age.selector';
import { getSexState } from '../../redux/selectors/sex.selector';
import {
  setAgeState,
  setCategoryState,
  setSexState,
} from '../../redux/slices/categories.slice';
import Skeleton from '../Skeleton/Skeleton';
import PaginationFunc from '../PaginationFunc/PaginationFunc';
import { Pagination } from 'antd';

export function Clothes(): JSX.Element {
  const dispatch = useAppDispatch();

  const categoryState = useAppSelector(getCategoryState);
  const ageState = useAppSelector(getAgeState);
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

  return (
    <>
      <div className={style.catalog}>
        <div className={style.filterBar}>
          <FilterBar />
        </div>
        <div className={style.container}>
          <div className={style.productsContainer}>
            {/* <h2>Одежда</h2> */}
            {loading ? (
              <Skeleton />
            ) : (
              // <div className="loading">
              //   <img src="./Spinner-1s-200px.gif" alt="" />
              // </div>
              <div className={style.loadedCards}>
                {currentProducts.length &&
                categoryState === 0 &&
                sexState === 0 &&
                ageState === 0 ? (
                  currentProducts.map(
                    (el: productType) =>
                      el.categoryId === 1 && <Card key={el.id} el={el} />
                  )
                ) : currentProducts.length &&
                  (categoryState || sexState || ageState) ? (
                  currentProducts
                    .filter(
                      (el) =>
                        (categoryState
                          ? el.productTypeId === categoryState
                          : el) &&
                        (sexState ? el.sexId === sexState : el) &&
                        (ageState ? el.ageId === ageState : el)
                    )
                    .map(
                      (el: productType) =>
                        el.categoryId === 1 && <Card key={el.id} el={el} />
                    )
                ) : (
                  <p className="products">No products found</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={style.pagination}>
        <Pagination
          defaultCurrent={1}
          total={50}
          pageSize={10}
          showSizeChanger={false}
          showQuickJumper={false}
          onChange={handlePageChange}
        />
      </div>
      <MainBrandsBlock />
    </>
  );
}
