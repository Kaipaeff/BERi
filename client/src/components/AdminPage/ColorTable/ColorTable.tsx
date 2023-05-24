import React, {useContext, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks';
import { Context } from '../../../index';
import { RootState } from '../../../types/types';

import styleColorTable from './ColorTable.module.css';
import search from '../../../img/icons/search.svg';
import searchOff from '../../../img/icons/searchOff.svg';
import arrowRight from '../../../img/icons/arrowRight.svg';
import closeSymbol from '../../../img/icons/closeSymbol.svg';
import IOneColorElement from '../../../types/ColorTable.types';
import AddColorScheme from './AddColorScheme/AddColorScheme';
import { getAllColorSchemesFromBack } from '../../../redux/Thunk/ColorScheme/getAllColorSchemesFromBack';
import OneColorSchemeCard from './OneColorSchemeCard/OneColorSchemeCard';
import { findColorSchemeByOrCodeFront } from '../../../redux/slices/ColorSheme/colorScheme.slice';

export default function ColorTable() {
  const { storeContext } = useContext(Context);
  const dispatch = useAppDispatch();

  const [userIsAdmin, setUserIsAdmin] = useState(false);

  const allColorSchemes = useAppSelector(
    (state: RootState) => state.ColorSchemeReducer.allColorSchemes
  );

  const [findElementInputActive, setFindElementInputActive] = useState(false);
  const [findColorScheme, setFindColorScheme] = useState('');

  const [addCardIsActive, setAddCardIsActive] = useState(false);

  // TODO: функция по определению статуса userIsAdmin

  useEffect(() => {
    setUserIsAdmin(storeContext.isAuth && storeContext.user.isAdmin);
  }, []);

  // todo-------------------------------------------------------------------------------

  useEffect(() => {
    dispatch(getAllColorSchemesFromBack());
  }, []);

  return (
    <>
      <h4 className={styleColorTable.titlePage}>ТАБЛИЦА ЦВЕТОВ</h4>
      <div className={styleColorTable.searchRow}>
        {userIsAdmin && !addCardIsActive && (
          <button
            onClick={() => setAddCardIsActive(!addCardIsActive)}
            className={styleColorTable.actionBtn}
          >
            Добавить
            <img src={arrowRight} alt="arrowRight" />
          </button>
        )}
        {userIsAdmin && addCardIsActive && (
          <button
            onClick={() => setAddCardIsActive(!addCardIsActive)}
            className={styleColorTable.cancelBtn}
          >
            Отменить
            <img src={closeSymbol} alt="closeSymbol" />
          </button>
        )}
        {addCardIsActive ? (
          <AddColorScheme
            addCardIsActive={addCardIsActive}
            setAddCardIsActive={setAddCardIsActive}
          />
        ) : (
          <div className={styleColorTable.filterBlock}>
            <div className={styleColorTable.filterFirstElement}>
              <p>Количество цветовых схем: {allColorSchemes.length}</p>
            </div>

            <form
              onSubmit={(e: React.FormEvent<HTMLFormElement>): void => {
                e.preventDefault();
                if (findColorScheme.length) {
                  dispatch(findColorSchemeByOrCodeFront(findColorScheme));
                  setFindElementInputActive(!findElementInputActive);
                }
              }}
            >
              <div className={styleColorTable.inputBlockConteiner}>
                <input
                  className={styleColorTable.inputTextElement}
                  type="text"
                  name="findEmail"
                  value={findColorScheme}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFindColorScheme(e.target.value)
                  }
                />

                {findElementInputActive ? (
                  <span title="Отменить поиск" aria-label="find">
                    <button
                      onClick={() => {
                        setFindElementInputActive(!findElementInputActive);
                        setFindColorScheme('');
                        dispatch(getAllColorSchemesFromBack());
                      }}
                      className={styleColorTable.findBtn}
                    >
                      <img
                        className={styleColorTable.searchOffSimbol}
                        src={searchOff}
                        alt="search"
                      />
                    </button>
                  </span>
                ) : (
                  <span title="Найти категорию по названию" aria-label="find">
                    <button type="submit" className={styleColorTable.findBtn}>
                      <img
                        className={styleColorTable.searchSimbol}
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
      {allColorSchemes.length ? (
        <div className={styleColorTable.content}>
          {allColorSchemes.map((colorscheme: IOneColorElement) => (
            <React.Fragment key={colorscheme.id}>
              <OneColorSchemeCard OneColorScheme={colorscheme} />
            </React.Fragment>
          ))}
        </div>
      ) : (
        <span className={styleColorTable.message}>
          Информация о цветах товаров отсутствует! Попробуйте изменить условие
          поиска.
        </span>
      )}
    </>
  );
}
