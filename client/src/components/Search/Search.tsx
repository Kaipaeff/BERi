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

  const [findProductName, setFindProductName] = useState('');
  const [stateText, setStateText] = useState('');
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    console.log(findProductName);
  }, [findProductName]);

  return (
    <div className={style.mainSearchPage}>
      {/* <h4 className="titlePage"></h4> */}
      <div className={style.searchRow}>
        <form
          className={style.formSearchPage}
          onSubmit={(e: React.FormEvent<HTMLFormElement>): void => {
            e.preventDefault();
            setStateText(findProductName);
          }}
        >
          <div className={style.inputBlockConteiner}>
            <input
              placeholder="Поиск товаров..."
              className={style.inputTextElement}
              type="text"
              name="findEmail"
              value={findProductName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFindProductName(e.target.value)
              }
            />
            <span title="Найти по названию" aria-label="find">
              <button type="submit" className={style.findBtn}>
                <img className={style.searchSimbol} src={search} alt="search" />
              </button>
            </span>
          </div>
        </form>
      </div>
      <br />
      {stateText.length ? (
        <span className="message">Результы по запросу "{stateText}"</span>
      ) : null}
      {allProducts.length && stateText.length ? (
        <div className={style.content}>
          {allProducts
            .filter((el): boolean =>
              el.name.toUpperCase().includes(stateText.toUpperCase())
            )
            .map((product) => (
              <React.Fragment key={product.id}>
                <OneCardSearch oneProduct={product} />
              </React.Fragment>
            ))}
        </div>
      ) : (
        <span className="message"></span>
      )}
    </div>
  );
}
