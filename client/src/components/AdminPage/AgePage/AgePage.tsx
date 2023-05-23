import React, { useContext, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks';

import styleAgePage from './AgePage.module.css'


import { Context } from '../../../index';
import { RootState } from '../../../types/types';

import search from '../../../img/icons/search.svg';
import searchOff from '../../../img/icons/searchOff.svg';
import arrowRight from '../../../img/icons/arrowRight.svg';
import closeSymbol from '../../../img/icons/closeSymbol.svg';

import IOneAge from '../../../types/Age.type';
import { getAge } from '../../../redux/Thunk/Age/getAge';
import AddAge from './AddAge/AddAge';
import { findAgeFront } from '../../../redux/slices/age.slice';
import OneAgeCard from './OneAgeCard/OneAgeCard';

export default function AgePage(): JSX.Element {
  const { storeContext } = useContext(Context);
  const dispatch = useAppDispatch();

  const [userIsAdmin, setUserIsAdmin] = useState(false);

  const allAges = useAppSelector(
    (state: RootState) => state.AgeReducer.age
  );


  const [findElementInputActive, setFindElementInputActive] = useState(false);
  const [findAge, setFindAge] = useState('');

  const [addCardIsActive, setAddCardIsActive] = useState(false);

  // TODO: функция по определению статуса userIsAdmin

  useEffect(() => {
    setUserIsAdmin(storeContext.isAuth && storeContext.user.isAdmin);
  }, []);

  // todo-------------------------------------------------------------------------------

  useEffect(() => {
    dispatch(getAge());
  }, []);

  return (
    <>
      <h4 className={styleAgePage.titlePage}>КАТЕГОРИИ ТОВАРОВ</h4>
      <div className={styleAgePage.searchRow}>
        {userIsAdmin && !addCardIsActive && (
          <button
            onClick={() => setAddCardIsActive(!addCardIsActive)}
            className={styleAgePage.actionBtn}
          >
            Добавить
            <img src={arrowRight} alt="arrowRight" />
          </button>
        )}
        {userIsAdmin && addCardIsActive && (
          <button
            onClick={() => setAddCardIsActive(!addCardIsActive)}
            className={styleAgePage.cancelBtn}
          >
            Отменить
            <img src={closeSymbol} alt="closeSymbol" />
          </button>
        )}
        {addCardIsActive ? (
          <AddAge
            addCardIsActive={addCardIsActive}
            setAddCardIsActive={setAddCardIsActive}
          />
        ) : (
          <div className={styleAgePage.filterBlock}>
            <div className={styleAgePage.filterFirstElement}>
              <p>Всего возрастных категорий: {allAges.length}</p>
            </div>

            <form
              onSubmit={(e: React.FormEvent<HTMLFormElement>): void => {
                e.preventDefault();
                if (findAge.length) {
                  dispatch(findAgeFront(findAge));
                  setFindElementInputActive(!findElementInputActive);
                }
              }}
            >
              <div className={styleAgePage.inputBlockConteiner}>
                <input
                  className={styleAgePage.inputTextElement}
                  type="text"
                  name="age"
                  value={findAge}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFindAge(e.target.value)
                  }
                />

                {findElementInputActive ? (
                  <span title="Отменить поиск" aria-label="find">
                    <button
                      onClick={() => {
                        setFindElementInputActive(!findElementInputActive);
                        setFindAge('');
                        dispatch(getAge());
                      }}
                      className={styleAgePage.findBtn}
                    >
                      <img
                        className={styleAgePage.searchOffSimbol}
                        src={searchOff}
                        alt="search"
                      />
                    </button>
                  </span>
                ) : (
                  <span title="Найти категорию по названию" aria-label="find">
                    <button type="submit" className={styleAgePage.findBtn}>
                      <img
                        className={styleAgePage.searchSimbol}
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
      {allAges.length ? (
        <div className={styleAgePage.content}>
          {allAges.map((age: IOneAge) => (
            <React.Fragment key={age.id}>
              <OneAgeCard OneAge={age} />
            </React.Fragment>
          ))}
        </div>
      ) : (
        <span className={styleAgePage.message}>
          Информация о категориях отсутствует! Попробуйте изменить условие
          поиска...
        </span>
      )}
    </>
  );
}
