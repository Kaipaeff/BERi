import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { RootState } from '../../types/types';
import { productType } from '../../types/product';
import { getProducts } from '../../redux/Thunk/Products/getProducts';
import style from './catalog.module.css';
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
import { useLocation } from 'react-router-dom';
import { getMainCategoryState } from '../../redux/selectors/maincategory.selector';

export function Catalog(): JSX.Element {
  const location = useLocation();

  const [cart, setCart] = useState<productType[]>([]);

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

  // хендл для local storage ...корзины
  const handleAddToCart = (product: productType, e: any) => {
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
      setCart(testMap);
    } else {
      localStorage.setItem(
        'GoodsForShopCart',
        JSON.stringify([...getItemLocalStorage, { ...product, quantity: 1 }])
      );
      setCart([...getItemLocalStorage, { ...product, quantity: 1 }]);
    }
  };

  const { currentProducts, handlePageChange } = PaginationFunc();

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
                {currentProducts.length ? (
                  (location.pathname === '/premiumbrands' &&
                    currentProducts.map((el: productType) => (
                      <Card key={el.id} el={el} />
                    ))) ||
                  (location.pathname === '/sale' &&
                    currentProducts.map((el: productType) => (
                      <Card key={el.id} el={el} />
                    ))) ||
                  (location.pathname === '/' &&
                    currentProducts
                      // .filter((el) => el.rating > 4.5)
                      .map((el: productType) => (
                        <Card key={el.id} el={el} />
                      ))) ||
                  currentProducts.map(
                    (el: productType) =>
                      el.categoryId === mainCategory && (
                        <Card key={el.id} el={el} />
                      )
                  )
                ) : (
                  <p className="products">No products found</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <Pagination
        defaultCurrent={1}
        total={40}
        pageSize={8}
        onChange={handlePageChange}
      />
      <MainBrandsBlock />
    </>
  );
}
