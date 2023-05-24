import React, { useContext, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks';
import styleSizeTable from './SizeTable.module.css';

import { Context } from '../../../index';
import { RootState } from '../../../types/types';

import search from '../../../img/icons/search.svg';
import searchOff from '../../../img/icons/searchOff.svg';
import arrowRight from '../../../img/icons/arrowRight.svg';
import closeSymbol from '../../../img/icons/closeSymbol.svg';
import AddSize from './AddSize/AddSize';
import IOneSize from '../../../types/Size.types';
import { getAllSizesFromBack } from '../../../redux/Thunk/SizeTable/getAllSiseFromBack';
import OneSizeCard from './OneSizeCard/OneSizeCard';
import { findSizeFront } from '../../../redux/slices/SizeTable/sizetable.slice';

export default function SizeTable(): JSX.Element {
  const { storeContext } = useContext(Context);
  const dispatch = useAppDispatch();

  const [userIsAdmin, setUserIsAdmin] = useState(false);

  const allSizes = useAppSelector(
    (state: RootState) => state.SizeTableReducer.allSizes
  );

  const [findElementInputActive, setFindElementInputActive] =
    useState<boolean>(false);
  const [findSizes, setFindSizes] = useState<number>(0.0);

  const [addCardIsActive, setAddCardIsActive] = useState(false);

  // TODO: функция по определению статуса userIsAdmin

  useEffect(() => {
    setUserIsAdmin(storeContext.isAuth && storeContext.user.isAdmin);
  }, []);

  // todo-------------------------------------------------------------------------------

  useEffect(() => {
    dispatch(getAllSizesFromBack());
  }, []);

  return (
    <>
      <h4 className={styleSizeTable.titlePage}>ТАБЛИЦА РАЗМЕРОВ</h4>
      <div className={styleSizeTable.searchRow}>
        {userIsAdmin && !addCardIsActive && (
          <button
            onClick={() => setAddCardIsActive(!addCardIsActive)}
            className={styleSizeTable.actionBtn}
          >
            Добавить
            <img src={arrowRight} alt="arrowRight" />
          </button>
        )}
        {userIsAdmin && addCardIsActive && (
          <button
            onClick={() => setAddCardIsActive(!addCardIsActive)}
            className={styleSizeTable.cancelBtn}
          >
            Отменить
            <img src={closeSymbol} alt="closeSymbol" />
          </button>
        )}
        {addCardIsActive ? (
          <AddSize
            addCardIsActive={addCardIsActive}
            setAddCardIsActive={setAddCardIsActive}
          />
        ) : (
          <div className={styleSizeTable.filterBlock}>
            <div className={styleSizeTable.filterFirstElement}>
              <p>Всего размеров: {allSizes.length}</p>
            </div>

            <form
              onSubmit={(e: React.FormEvent<HTMLFormElement>): void => {
                e.preventDefault();
                if (findSizes > 0) {
                  dispatch(findSizeFront(findSizes));
                  setFindElementInputActive(!findElementInputActive);
                }
              }}
            >
              <div className={styleSizeTable.inputBlockConteiner}>
                <input
                  className={styleSizeTable.inputTextElement}
                  type="number"
                  step={0.1}
                  name="findSize"
                  min={0.0}
                  value={findSizes}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFindSizes(Number(e.target.value))
                  }
                />

                {findElementInputActive ? (
                  <span title="Отменить поиск" aria-label="find">
                    <button
                      onClick={() => {
                        setFindElementInputActive(!findElementInputActive);
                        setFindSizes(0.0);
                        dispatch(getAllSizesFromBack());
                      }}
                      className={styleSizeTable.findBtn}
                    >
                      <img
                        className={styleSizeTable.searchOffSimbol}
                        src={searchOff}
                        alt="search"
                      />
                    </button>
                  </span>
                ) : (
                  <span title="Найти размер" aria-label="find">
                    <button type="submit" className={styleSizeTable.findBtn}>
                      <img
                        className={styleSizeTable.searchSimbol}
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
      {allSizes.length ? (
        <div className={styleSizeTable.content}>
          {allSizes.map((size: IOneSize) => (
            <React.Fragment key={size.id}>
              <OneSizeCard OneSize={size} />
            </React.Fragment>
          ))}
        </div>
      ) : (
        <span className={styleSizeTable.message}>
          Размер не найден! Попробуйте изменить условие
          поиска.
        </span>
      )}
    </>
  );
}
