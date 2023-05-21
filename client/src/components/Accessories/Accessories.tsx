import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { RootState } from '../../types/types';
import { productType } from '../../types/product';
import { getProducts } from '../../redux/Thunk/Products/getProducts';
import style from './accessories.module.css';
import Card from '../Card/Card';
import MainBrandsBlock from '../MainBrandsBlock/MainBrandsBlock';
import FilterBar from '../FilterBar/FilterBar';
import { getCategoryState } from '../../redux/selectors/category.selector';
import { getAgeState } from '../../redux/selectors/age.selector';
import { getSexState } from '../../redux/selectors/sex.selector';
import { setAgeState, setCategoryState, setSexState } from '../../redux/slices/categories.slice';
import Skeleton from '../Skeleton/Skeleton';

export function Accessories(): JSX.Element {
  const [cart, setCart] = useState<productType[]>([]);

  const dispatch = useAppDispatch();

  const categoryState = useAppSelector(getCategoryState);
  const ageState = useAppSelector(getAgeState);
  const sexState = useAppSelector(getSexState);

  const products = useAppSelector(
    (state: RootState) => state.ProductReducer.products
  );
  const loading = useAppSelector(
    (state: RootState) => state.ProductReducer.loading
  );

  useEffect(() => {
    dispatch(getProducts());
    dispatch(setSexState(0));
    dispatch(setAgeState(0));
    dispatch(setCategoryState(0));
  }, []);

  // хендл для local storage
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

  return (
    <>
      <div className={style.catalog}>
        <div className={style.filterBar}>
          <FilterBar />
        </div>

        <div className={style.productsContainer}>
          <h2>Аксессуары</h2>
          {loading ? (
            <Skeleton />
            // <div className="loading">
            //   <img src="./Spinner-1s-200px.gif" alt="" />
            // </div>
          ) : (
            <div className={style.loadedCards}>
              {products.length &&
              categoryState === 0 &&
              sexState === 0 &&
              ageState === 0 ? (
                products.map(
                  (el: productType) =>
                    el.categoryId === 3 && <Card key={el.id} el={el} />
                )
              ) : products.length && (categoryState || sexState || ageState) ? (
                products
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
                      el.categoryId === 3 && <Card key={el.id} el={el} />
                  )
              ) : (
                <p className="products">No products found</p>
              )}
            </div>
          )}
        </div>
      </div>
      <MainBrandsBlock />
    </>
  );
}
