import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { RootState } from '../../types/types';
import { productType } from '../../types/product';
import { getProducts } from '../../redux/Thunk/Products/getProducts';
import style from './catalog.module.css';
import Card from '../Card/Card';
import MainBrandsBlock from '../MainBrandsBlock/MainBrandsBlock';
import FilterBar from '../FilterBar/FilterBar';
import {
  setAgeState,
  setCategoryState,
  setSexState,
} from '../../redux/slices/categories.slice';
import Skeleton from '../Skeleton/Skeleton';
import PaginationFunc from '../PaginationFunc/PaginationFunc';
import { Pagination } from 'antd';
import { getMainCategoryState } from '../../redux/selectors/maincategory.selector';

export function Catalog(): JSX.Element {

  const dispatch = useAppDispatch();

  const mainCategory = useAppSelector(getMainCategoryState);

  const loading = useAppSelector(
    (state: RootState) => state.ProductReducer.loading
  );

  useEffect(() => {
    dispatch(getProducts());
    dispatch(setSexState(0));
    dispatch(setAgeState(0));
    dispatch(setCategoryState(0));
  }, []);
  console.log('RENDER')

  const { currentProducts, filteredProduct, handlePageChange } =
  PaginationFunc();

  return (
    <>
      <div className={style.catalog}>
        <div className={style.filterBar}>
          <FilterBar />
        </div>
        <div className={style.container}>
          <div className={style.productsContainer}>
            {loading ? (
              <Skeleton />
            ) : (
              <div className={style.loadedCards}>
                {currentProducts.length && mainCategory ? (
                  currentProducts.map(
                    (el: productType) =>
                      el.categoryId === mainCategory && (
                        <Card key={el.id} el={el} />
                      )
                  )
                ) : currentProducts.length && !mainCategory ? (
                  currentProducts.map((el: productType) => (
                    <Card key={el.id} el={el} />
                  ))
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
          total={filteredProduct.length}
          pageSize={8}
          onChange={handlePageChange}
        />
      </div>
      <MainBrandsBlock />
    </>
  );
}
