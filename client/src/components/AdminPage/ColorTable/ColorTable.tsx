import React, { CSSProperties, useContext, useEffect, useState } from 'react';
import { ColorResult } from 'react-color';

import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks';
import { Context } from '../../../index';
import { RootState } from '../../../types/types';
import ColorSelector from './ColorSelector/ColorSelector';

import styleColorTable from './ColorTable.module.css';
import search from '../../../img/icons/search.svg';
import searchOff from '../../../img/icons/searchOff.svg';
import arrowRight from '../../../img/icons/arrowRight.svg';
import closeSymbol from '../../../img/icons/closeSymbol.svg';
import IOneColorElement from '../../../types/ColorTable.types';
import AddColorScheme from './AddColorScheme/AddColorScheme';
import { getAllColorSchemesFromBack } from '../../../redux/Thunk/ColorScheme/getAllColorSchemesFromBack';
import OneColorSchemeCard from './OneColorSchemeCard/OneColorSchemeCard';

export default function ColorTable() {
  const { storeContext } = useContext(Context);
  const dispatch = useAppDispatch();

  const [userIsAdmin, setUserIsAdmin] = useState(false);

  const allColorSchemes = useAppSelector(
    (state: RootState) => state.ColorSchemeReducer.allColorSchemes
  );

  const [selectedColor, setSelectedColor] = useState<ColorResult>({
    hex: '#000000',
    hsl: { h: 0, s: 0, l: 0 },
    rgb: { r: 0, g: 0, b: 0 },
  });
  const backgroundStyle: CSSProperties = { background: selectedColor.hex };

  const [filterStatus, setFilterStatus] = useState(0);
  const [findElementInputActive, setFindElementInputActive] = useState(false);
  const [findCategories, setFindCategories] = useState('');

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
      <h4 className={styleColorTable.titlePage}>КАТЕГОРИИ ТОВАРОВ</h4>
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
          // addCardIsActive={addCardIsActive}
          // setAddCardIsActive={setAddCardIsActive}
          />
        ) : (
          <div className={styleColorTable.filterBlock}>
            <div className={styleColorTable.filterFirstElement}>
              <p>Количество цветовых гамм товаров: {allColorSchemes.length}</p>
            </div>

            <form
              onSubmit={(e: React.FormEvent<HTMLFormElement>): void => {
                e.preventDefault();
                if (findCategories.length) {
                  // dispatch(findCategoryByNameFront(findCategories));
                  setFindElementInputActive(!findElementInputActive);
                }
              }}
            >
              <div className={styleColorTable.inputBlockConteiner}>
                <input
                  className={styleColorTable.inputTextElement}
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
                        // dispatch(getAllCategoriesFromBack());
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
          поиска...
        </span>
      )}
    </>
  );
}

// const [selectedColor, setSelectedColor] = useState<ColorResult>({
//   hex: '#000000',
//   hsl: { h: 0, s: 0, l: 0 },
//   rgb: { r: 0, g: 0, b: 0 },
// });

// const colorStyle: CSSProperties = { color: selectedColor.hex };

{
  /* <div>
<h1>Выбeрете цвет</h1>
<ColorSelector
  selectedColor={selectedColor}
  setSelectedColor={setSelectedColor}
/>
<h1 style={colorStyle}> Here's your color codes: {selectedColor.hex} </h1>
</div> */
}
