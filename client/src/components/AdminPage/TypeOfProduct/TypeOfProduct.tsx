import React, { useContext, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks';

import { Context } from '../../../index';
import { RootState } from '../../../types/types';
import { getAllTypesOfProductsFromBack } from '../../../redux/Thunk/TypeOfProducts/getAllTypesOfProductsFromBack';

import search from '../../../img/icons/search.svg';
import searchOff from '../../../img/icons/searchOff.svg';
import arrowRight from '../../../img/icons/arrowRight.svg';
import closeSymbol from '../../../img/icons/closeSymbol.svg';

import styleProductsType from './TypeOfProduct.module.css';

import IOneTypeOfProduct from '../../../types/TypeOfProducts.type';
import AddTypesOfProduct from './AddTypesOfProduct/AddTypesOfProduct';
import OneTypeOfProductCard from './OneTypeOfProductCard/OneTypeOfProductCard';
import { findTypeOfProductFront } from '../../../redux/slices/TypeOfProduct/typeOfProducts.slice';

export default function ProductsType(): JSX.Element {
  const { storeContext } = useContext(Context);
  const dispatch = useAppDispatch();

  const [userIsAdmin, setUserIsAdmin] = useState(false);

  const allTypesOfProduct = useAppSelector(
    (state: RootState) => state.AllTypesOfProductReducer.allTypesOfProducts
  );

  const [findElementInputActive, setFindElementInputActive] = useState(false);
  const [findTypeOfProduct, setFindTypeOfProduct] = useState('');

  const [addCardIsActive, setAddCardIsActive] = useState(false);

  // TODO: функция по определению статуса userIsAdmin

  useEffect(() => {
    setUserIsAdmin(storeContext.isAuth && storeContext.user.isAdmin);
  }, []);

  // todo-------------------------------------------------------------------------------

  useEffect(() => {
    dispatch(getAllTypesOfProductsFromBack());
  }, []);

  return (
    <>
      <h4 className={styleProductsType.titlePage}>ТИПЫ ТОВАРОВ</h4>
      <div className={styleProductsType.searchRow}>
        {userIsAdmin && !addCardIsActive && (
          <button
            onClick={() => setAddCardIsActive(!addCardIsActive)}
            className={styleProductsType.actionBtn}
          >
            Добавить
            <img src={arrowRight} alt="arrowRight" />
          </button>
        )}
        {userIsAdmin && addCardIsActive && (
          <button
            onClick={() => setAddCardIsActive(!addCardIsActive)}
            className={styleProductsType.cancelBtn}
          >
            Отменить
            <img src={closeSymbol} alt="closeSymbol" />
          </button>
        )}
        {addCardIsActive ? (
          <AddTypesOfProduct
            addCardIsActive={addCardIsActive}
            setAddCardIsActive={setAddCardIsActive}
          />
        ) : (
          <div className={styleProductsType.filterBlock}>
            <div className={styleProductsType.filterFirstElement}>
              <p>Всего типов товаров: {allTypesOfProduct.length}</p>
            </div>

            <form
              onSubmit={(e: React.FormEvent<HTMLFormElement>): void => {
                e.preventDefault();
                if (findTypeOfProduct.length) {
                  dispatch(findTypeOfProductFront(findTypeOfProduct));
                  setFindElementInputActive(!findElementInputActive);
                }
              }}
            >
              <div className={styleProductsType.inputBlockConteiner}>
                <input
                  className={styleProductsType.inputTextElement}
                  type="text"
                  name="findTypeOfProduct"
                  value={findTypeOfProduct}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFindTypeOfProduct(e.target.value)
                  }
                />

                {findElementInputActive ? (
                  <span title="Отменить поиск" aria-label="find">
                    <button
                      onClick={() => {
                        setFindElementInputActive(!findElementInputActive);
                        setFindTypeOfProduct('');
                        dispatch(getAllTypesOfProductsFromBack());
                      }}
                      className={styleProductsType.findBtn}
                    >
                      <img
                        className={styleProductsType.searchOffSimbol}
                        src={searchOff}
                        alt="search"
                      />
                    </button>
                  </span>
                ) : (
                  <span title="Найти категорию по названию" aria-label="find">
                    <button type="submit" className={styleProductsType.findBtn}>
                      <img
                        className={styleProductsType.searchSimbol}
                        src={search}
                        alt="search"
                      />
                    </button>
                  </span>
                )}
              </div>
            </form>
          </div>
        )}
      </div>
      {allTypesOfProduct.length ? (
        <div className={styleProductsType.content}>
          {allTypesOfProduct.map((typeofproduct: IOneTypeOfProduct) => (
            <React.Fragment key={typeofproduct.id}>
              <OneTypeOfProductCard OneTypeOfProduct={typeofproduct} />
            </React.Fragment>
          ))}
        </div>
      ) : (
        <span className={styleProductsType.message}>
          Информация о типах товаров отсутствует! Попробуйте изменить условие
          поиска...
        </span>
      )}
    </>
  );
}
