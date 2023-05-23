import React, { useContext, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks';
import styleCategories from './Categories.module.css';

import { Context } from '../../../index';
import { RootState } from '../../../types/types';

import search from '../../../img/icons/search.svg';
import searchOff from '../../../img/icons/searchOff.svg';
import arrowRight from '../../../img/icons/arrowRight.svg';
import closeSymbol from '../../../img/icons/closeSymbol.svg';
import AddCategories from './AddCategory/AddCategories';
import { getAllCategoriesFromBack } from '../../../redux/Thunk/CategoriesCRUD/getAllCategoriesFromBack';
import { findCategoryByNameFront } from '../../../redux/slices/CategoryCRUD/category.crud.slice';
import IOneCategory from '../../../types/Category.types';
import OneCategoryCard from './OneCategoryCard/OneCategoryCard';

export default function Categories(): JSX.Element {
  const { storeContext } = useContext(Context);
  const dispatch = useAppDispatch();

  const [userIsAdmin, setUserIsAdmin] = useState(false);

  const allCategories = useAppSelector(
    (state: RootState) => state.CategoryCRUDReducer.allCategories
  );


  const [findElementInputActive, setFindElementInputActive] = useState(false);
  const [findCategories, setFindCategories] = useState('');

  const [addCardIsActive, setAddCardIsActive] = useState(false);

  // TODO: функция по определению статуса userIsAdmin

  useEffect(() => {
    setUserIsAdmin(storeContext.isAuth && storeContext.user.isAdmin);
  }, []);

  // todo-------------------------------------------------------------------------------

  useEffect(() => {
    dispatch(getAllCategoriesFromBack());
  }, []);

  return (
    <>
      <h4 className={styleCategories.titlePage}>КАТЕГОРИИ ТОВАРОВ</h4>
      <div className={styleCategories.searchRow}>
        {userIsAdmin && !addCardIsActive && (
          <button
            onClick={() => setAddCardIsActive(!addCardIsActive)}
            className={styleCategories.actionBtn}
          >
            Добавить
            <img src={arrowRight} alt="arrowRight" />
          </button>
        )}
        {userIsAdmin && addCardIsActive && (
          <button
            onClick={() => setAddCardIsActive(!addCardIsActive)}
            className={styleCategories.cancelBtn}
          >
            Отменить
            <img src={closeSymbol} alt="closeSymbol" />
          </button>
        )}
        {addCardIsActive ? (
          <AddCategories
            addCardIsActive={addCardIsActive}
            setAddCardIsActive={setAddCardIsActive}
          />
        ) : (
          <div className={styleCategories.filterBlock}>
            <div className={styleCategories.filterFirstElement}>
              <p>Всего категорий товаров: {allCategories.length}</p>
            </div>

            <form
              onSubmit={(e: React.FormEvent<HTMLFormElement>): void => {
                e.preventDefault();
                if (findCategories.length) {
                  dispatch(findCategoryByNameFront(findCategories));
                  setFindElementInputActive(!findElementInputActive);
                }
              }}
            >
              <div className={styleCategories.inputBlockConteiner}>
                <input
                  className={styleCategories.inputTextElement}
                  type="text"
                  name="findEmail"
                  value={findCategories}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFindCategories(e.target.value)
                  }
                />

                {findElementInputActive ? (
                  <span title="Отменить поиск" aria-label="find">
                    <button
                      onClick={() => {
                        setFindElementInputActive(!findElementInputActive);
                        setFindCategories('');
                        dispatch(getAllCategoriesFromBack());
                      }}
                      className={styleCategories.findBtn}
                    >
                      <img
                        className={styleCategories.searchOffSimbol}
                        src={searchOff}
                        alt="search"
                      />
                    </button>
                  </span>
                ) : (
                  <span title="Найти категорию по названию" aria-label="find">
                    <button type="submit" className={styleCategories.findBtn}>
                      <img
                        className={styleCategories.searchSimbol}
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
      {allCategories.length ? (
        <div className={styleCategories.content}>
          {allCategories.map((category: IOneCategory) => (
            <React.Fragment key={category.id}>
              <OneCategoryCard OneCategory={category} />
            </React.Fragment>
          ))}
        </div>
      ) : (
        <span className={styleCategories.message}>
          Информация о категориях отсутствует! Попробуйте изменить условие
          поиска...
        </span>
      )}
    </>
  );
}
