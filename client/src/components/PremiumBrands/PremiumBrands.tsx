import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { RootState } from '../../types/types';
import { productType } from '../../types/product';
import { getProducts } from '../../redux/Thunk/Products/getProducts';
import style from './premiumBrands.module.css';
import Card from '../Card/Card';
import MainBrandsBlock from '../MainBrandsBlock/MainBrandsBlock';
import FilterBar from '../FilterBar/FilterBar';
import { getCategoryState } from '../../redux/selectors/category.selector';
import {
  setAgeState,
  setCategoryState,
  setSexState,
} from '../../redux/slices/categories.slice';
import Skeleton from '../Skeleton/Skeleton';
import { getSexState } from '../../redux/selectors/sex.selector';
import { Pagination } from 'antd';

export function PremiumBrands(): JSX.Element {
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

  function handlePageChange(page: number, pageSize: number): void {
    throw new Error('Function not implemented.');
  }

  return (
    <>
      <div className={style.catalog}>
        <div className={style.filterBar}>
          <FilterBar />
        </div>
        <div className={style.container}>
          <div className={style.productsContainer}>
            {/* <h2>Премиум бренды</h2> */}
            {loading ? (
              <Skeleton />
            ) : (
              <div className={style.loadedCards}>
                {products.length && sexState === 0 ? (
                  products
                    .filter((el) => el.rating > 4.5)
                    .map(
                      (el: productType) =>
                        el.Vendor.premium && <Card key={el.id} el={el} />
                    )
                ) : products.length && sexState ? (
                  products
                    .filter((el) => el.rating > 4.5 && el.sexId === sexState)
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
