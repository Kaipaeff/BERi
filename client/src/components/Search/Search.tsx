import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { RootState } from '../../types/types';
import { findProductByName } from '../../redux/slices/product.slice';
import { getProducts } from '../../redux/Thunk/Products/getProducts';

import search from '../../img/icons/search.svg';
import searchOff from '../../img/icons/searchOff.svg';

export function Search() {
  const dispatch = useAppDispatch();

  const allProducts = useAppSelector(
    (state: RootState) => state.ProductReducer.products
  );

  const [findProductName, setFindProductName] = useState('');
  const [findElementInputActive, setFindElementInputActive] = useState(false);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      <h4 className="titlePage">Страница поиска</h4>
      <div className="searchRow">
        <form
          onSubmit={(e: React.FormEvent<HTMLFormElement>): void => {
            e.preventDefault();
            if (findProductName.length) {
              dispatch(findProductByName(findProductName));
              setFindElementInputActive(!findElementInputActive);
            }
          }}
        >
          <div className="inputBlockConteiner">
            <input
              className="inputTextElement"
              type="text"
              name="findEmail"
              value={findProductName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFindProductName(e.target.value)
              }
            />
            {findElementInputActive ? (
              <span title="Отменить поиск" aria-label="find">
                <button
                  onClick={() => {
                    setFindElementInputActive(!findElementInputActive);
                    setFindProductName('');
                    dispatch(getProducts());
                  }}
                  className="findBtn"
                >
                  <img
                    className="searchOffSimbol"
                    src={searchOff}
                    alt="search"
                  />
                </button>
              </span>
            ) : (
              <span title="Найти по названию" aria-label="find">
                <button type="submit" className="findBtn">
                  <img className="searchSimbol" src={search} alt="search" />
                </button>
              </span>
            )}
          </div>
        </form>
      </div>

      {allProducts.length ? (
        <div className="content">
          {allProducts.map((product) => (
            <div key={product.id}>{product.name}</div>
          ))}
        </div>
      ) : (
        <span className="message">Информация о товарах отсутствует</span>
      )}
    </>
  );
}
