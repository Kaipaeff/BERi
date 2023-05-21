import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { RootState } from '../../types/types';
import { productType } from '../../types/product';
import { getProducts } from '../../redux/Thunk/Products/getProducts';
import style from './home.module.css';
import Card from '../Card/Card';
import MainBrandsBlock from '../MainBrandsBlock/MainBrandsBlock';
import FilterBar from '../FilterBar/FilterBar';
<<<<<<< HEAD
import Advantages from '../Advantages/Advantages';
=======
import { getCategoryState } from '../../redux/selectors/category.selector';
>>>>>>> dev

export function Home(): JSX.Element {
  
  const [cart, setCart] = useState<productType[]>([]);

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
<<<<<<< HEAD
        <div className={style.container}>
          <div className={style.filterBar}>
            <FilterBar onClick={handleClick} />
          </div>
            <div className={style.productsContainer}>
              <div className={style.cardContainer}>
                {loading ? (
                  <div className="loading">
                    <img src="./Spinner-1s-200px.gif" alt="" />
                  </div>
                ) : (
                    <div className={style.loadedCards}>
                      {products.length && category === 0 ? (
                        products.map((el: productType) => <Card key={el.id} el={el} />)
                      ) : products.length && category ? (
                        products
                          .filter((el) => el.categoryId === category)
                          .map((el: productType) => <Card key={el.id} el={el} />)
                      ) : (
                        <p className="products">No products found</p>
                      )}
                    </div>
                )}
              </div>
            </div>
=======
        <div className={style.filterBar}>
          <FilterBar />
        </div>

        <div className={style.productsContainer}></div>
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
>>>>>>> dev
        </div>
    </div>
        <div className={style.pagination}>1 2 3 4 5</div>

    <MainBrandsBlock />
    <Advantages />
    
    </>
  );
}
