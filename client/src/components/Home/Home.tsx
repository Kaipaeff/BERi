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

export function Home(): JSX.Element {
  const [cart, setCart] = useState<productType[]>([]);

  const dispatch = useAppDispatch();

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
        <div className={style.container}>
          <div className={style.filterBar}>
            <FilterBar />
          </div>

          <div className={style.productsContainer}>
            <div className={style.cardContainer}>
              {loading ? (
                <Skeleton />
              ) : (
                <div className={style.loadedCards}>
                  {products.length && sexState === 0 ? (
                    products
                      .filter((el) => el.rating > 4.5)
                      .map((el: productType) => <Card key={el.id} el={el} />)
                  ) : products.length && sexState ? (
                    products
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
      <div className={style.pagination}>1 2 3 4 5</div>
      <MainBrandsBlock />
      <Advantages />
    </>
  );
}
