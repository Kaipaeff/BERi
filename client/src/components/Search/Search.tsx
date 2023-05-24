import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { RootState } from '../../types/types';

import { getProducts } from '../../redux/Thunk/Products/getProducts';
import OneCardSearch from './OneCardSearch';
import style from './search.module.css';

import search from '../../img/icons/search.svg';
import searchOff from '../../img/icons/searchOff.svg';

export function Search() {
  const dispatch = useAppDispatch();

  const allProducts = useAppSelector(
    (state: RootState) => state.ProductReducer.products
  );

  // let allProductsArr = allProducts;

  const [findProductName, setFindProductName] = useState('');
  const [findElementInputActive, setFindElementInputActive] = useState(false);
  // const [prod, setProd] = useState(allProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    // setTimeout(() => {
    //   if (findProductName.length) {
        // dispatch(findProductByName(findProductName));
        // setFindElementInputActive(!findElementInputActive);
      // }
       
      // setFindElementInputActive(!findElementInputActive);
      // setFindProductName('');
    // }, 300);
    console.log(findProductName);
    console.log("🚀🚀🚀🚀🚀 ~ findElementInputActive:", findElementInputActive)
  }, [findProductName]);

  return (
    <>
      <h4 className="titlePage">Страница поиска</h4>
      <div className="searchRow">
        <form
          onSubmit={(e: React.FormEvent<HTMLFormElement>): void => {
            e.preventDefault();
            // if (findProductName.length) {
            //   dispatch(findProductByName(findProductName));
            //   setFindElementInputActive(!findElementInputActive);
            // }
          }}
        >
          <div className={style.inputBlockConteiner}>
            <input
            placeholder='Поиск товаров...'
              className="inputTextElement"
              type="text"
              name="findEmail"
              value={findProductName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFindProductName(e.target.value)
              }
            />
            {/* <span title="Найти по названию" aria-label="find">
                <button type="submit" className="findBtn" onClick={() => {
                  if (findProductName.length) {
                    dispatch(findProductByName(findProductName));
                    setFindElementInputActive(!findElementInputActive);
                    
                  }
                    setFindElementInputActive(!findElementInputActive);
                    setFindProductName('');
                    
                  }}>
                  <img className="searchSimbol" src={search} alt="search" />
                </button>
              </span> */}
          </div>
        </form>
      </div>

      {allProducts.length && findProductName ? (
        <div className={style.content}>
          {allProducts.filter(
          (el): boolean =>
            el.name.toUpperCase().includes(findProductName.toUpperCase())
        ).map((product) => (
            // <div key={product.id}>{product.name}</div>
            <React.Fragment key={product.id}>
              <OneCardSearch oneProduct={product} />
            </React.Fragment>
          ))}
        </div>
      ) : (
        <span className="message">Информация о товарах отсутствует</span>
      )}
    </>
  );
}
